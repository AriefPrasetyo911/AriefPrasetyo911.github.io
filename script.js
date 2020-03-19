$(document).ready(function(){
    $("form#formData").submit(function(ev){
        ev.preventDefault();
        //create variable to hold data
        var keywords = $("#keywords").val();
        var max_video = $("#max-vids").val();
        var max_comments_per_video = $("#max-commns-per-vid").val();
        var API_KEY = "AIzaSyCQjGZ3eu87BZtBLF_JhvuxtxiBVLKGyDk";
        var API_URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&key="+API_KEY+"&maxResults="+max_video+"&relevanceLanguage=en&q="+keywords;

        //call the API using AJAX
        $.ajax({
            url: API_URL,
            method: "GET",
            success: function(res){
                // console.log('result for search: ', res);
                for(var i = 0; i<res.items.length; i++){
                    //prepare videoID for comments API
                    let videoID = res.items[i].id.videoId;
                    // console.log("data video ID ke: ",i, videoID);
                    //call commentThreads API
                    var YT_URL = 'https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key='+API_KEY+'&videoId='+videoID+'&maxResults='+max_comments_per_video;
                    //call API for scrap the comments using ajax
                    $.ajax({
                        url: YT_URL,
                        method: "GET",
                        success: function(data){
                            // console.log("result for comments is: ", result)
                            // console.log('max comments per video', max_comments_per_video);
                            for(var i = 0; i<data.items.length; i++){
                                result = `
                                    <tr>
                                        <th scope="row">${i+1}</th>
                                        <td>https://www.youtube.com/watch?v=${data.items[i].snippet.videoId}</td>
                                        <td>${data.items[i].snippet.topLevelComment.snippet.authorDisplayName}</td>
                                        <td>${data.items[i].snippet.topLevelComment.snippet.textDisplay}</td>
                                        <td>${data.items[i].snippet.topLevelComment.snippet.publishedAt}</td>
                                    </tr>
                                `;
                                
                                //append comment
                                $('#append').append(result);
                            }
                        },
                        error: function(err){
                            console.log(err);
                        }
                    });
                }
                // var max_video = `
                //         <input type="text" class="form-control" id="totalVideo" aria-describedby="totalVideo" value="${res.pageInfo.totalResults}" disabled>
                //     `;
                // //append data
                // $('#totalVideo').append(max_video);
            },
            error: function(err){
                console.log(err);
            }
        })
    });

    //set extension select and export button disable first
    $("#selectFileExtention").attr('disabled', 'disabled');
    $("#export").attr('disabled', 'disabled');

    //check if filename field have value
    $("#filename").on('keyup', function(){
        var filenameValue = $("#filename").val();
        //if filename have value enable select and if empty disabled again
        if(filenameValue != ""){
            $( "#selectFileExtention" ).prop( "disabled", false );
        } else {
            $( "#selectFileExtention" ).prop( "disabled", true );
        }
    });

    //check if select button value not empty
    $("#selectFileExtention").on("change", function(){
        var selectFileExtentionValue = $(this).children("option:selected").val();
        //if select have value CSV or XLS/XLSX then enable the button, otherwise disable
        if(selectFileExtentionValue == "CSV" || selectFileExtentionValue == "XSLX"){
            $( "#export" ).prop( "disabled", false );
            //if export button clicked then export HTML table to desired format
            $("#export").one("click", function(){
                var selectValue = $("#selectFileExtention").val();
                var filenameValue = $("#filename").val();
                //if select value == xls/xlsx 
                if(selectValue == "XSLX"){
                    TableExport(document.getElementsByTagName("table"), {
                        headers: true,                      // (Boolean), display table headers (th or td elements) in the <thead>, (default: true)
                        footers: true,                      // (Boolean), display table footers (th or td elements) in the <tfoot>, (default: false)
                        formats: ["xlsx"],    // (String[]), filetype(s) for the export, (default: ['xlsx', 'csv', 'txt'])
                        filename: filenameValue,                     // (id, String), filename for the downloaded file, (default: 'id')
                        bootstrap: false,                   // (Boolean), style buttons using bootstrap, (default: true)
                        exportButtons: true,                // (Boolean), automatically generate the built-in export buttons for each of the specified formats (default: true)
                        position: "top",                 // (top, bottom), position of the caption element relative to table, (default: 'bottom')
                        ignoreRows: null,                   // (Number, Number[]), row indices to exclude from the exported file(s) (default: null)
                        ignoreCols: null,                   // (Number, Number[]), column indices to exclude from the exported file(s) (default: null)
                        trimWhitespace: true,               // (Boolean), remove all leading/trailing newlines, spaces, and tabs from cell text in the exported file(s) (default: false)
                        RTL: false,                         // (Boolean), set direction of the worksheet to right-to-left (default: false)
                        sheetname: "id"                     // (id, String), sheet name for the exported spreadsheet, (default: 'id')
                    });
                } else {
                    TableExport(document.getElementsByTagName("table"), {
                        headers: true,                      // (Boolean), display table headers (th or td elements) in the <thead>, (default: true)
                        footers: true,                      // (Boolean), display table footers (th or td elements) in the <tfoot>, (default: false)
                        formats: ["csv"],    // (String[]), filetype(s) for the export, (default: ['xlsx', 'csv', 'txt'])
                        filename: filenameValue,                     // (id, String), filename for the downloaded file, (default: 'id')
                        bootstrap: false,                   // (Boolean), style buttons using bootstrap, (default: true)
                        exportButtons: true,                // (Boolean), automatically generate the built-in export buttons for each of the specified formats (default: true)
                        position: "top",                 // (top, bottom), position of the caption element relative to table, (default: 'bottom')
                        ignoreRows: null,                   // (Number, Number[]), row indices to exclude from the exported file(s) (default: null)
                        ignoreCols: null,                   // (Number, Number[]), column indices to exclude from the exported file(s) (default: null)
                        trimWhitespace: true,               // (Boolean), remove all leading/trailing newlines, spaces, and tabs from cell text in the exported file(s) (default: false)
                        RTL: false,                         // (Boolean), set direction of the worksheet to right-to-left (default: false)
                        sheetname: "id"                     // (id, String), sheet name for the exported spreadsheet, (default: 'id')
                    });
                }
            })
        } else {
            $( "#export" ).prop( "disabled", true );
        }
    })
})