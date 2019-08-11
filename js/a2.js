<script>
function insertValue(){
    var script_url = "https://script.google.com/macros/s/AKfycbyvtKSzvxk8f5vum9qv_JVLtJNCqz8zbcHdN1-HsKqt2nx6psk/exec";
  
    // Make an AJAX call to Google Script
    
  var date=	$("#date").val();
  var what= $("#what").val();
  var kharcho=$("#kharcho").val();
      
      
      var url = script_url+"?callback=ctrlq&date="+date+"&what="+what+"&kharcho"+kharcho+"&action=insert";
    
  
      var request = jQuery.ajax({
        crossDomain: true,
        url: url ,
        method: "GET",
        dataType: "jsonp"
      });
  
    
}
</script>