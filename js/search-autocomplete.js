$(function(){
  var searchVal = [

    { value: 'dentiste' },
    { value: 'ophtalmologue' },
    { value: 'chirurgien' },
    { value: 'pediatre' },
    { value: 'podologue' },
    { value: 'cardiologue' },
    { value: 'psychologue' },
    { value: 'pharmacien' },
    { value: 'urgence' }
  ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#homePage_p1search').autocomplete({
    lookup: searchVal,
    onSelect: function (suggestion) {
    	console.log("suggestion"+ suggestion);
    	//preTreatme(suggestion.value);
    	
    	Appery.navigateTo('mapPage', {
            transition: 'slide',
            reverse: false
        });
    //var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
    //  $('#outputcontent').html(thehtml);
    }
  });
  

});