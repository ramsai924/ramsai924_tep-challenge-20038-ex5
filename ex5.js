function fakeAjax(url,cb) {
	 var randomDelay = 1000;
	                
	                    console.log("Requesting: " + url);
	                
	                    return new Promise(function(resolve,reject){
				                            setTimeout(resolve,randomDelay);
				                        })
}

function output(text) {
	console.log(text);
}

// **************************************

function getFile(file) {
	 var fake_responses = {
		                             "file1": "The first text",
		                             "file2": "The middle text",
		                             "file3": "The last text"
		                         };
	                
	                      return fakeAjax(file)
	                      .then(function(){                    
				                               console.log(fake_responses[file]);
				                             })
	                        .catch(function(err){
					                            console.log(err)
					                        })
}
  async function syn(){
	                      await getFile("file1");
	                      await getFile("file2");
	                      await getFile("file3");    
	                  
	                      await output("complete");
	                  }
                syn()

// request an array of files at once in "parallel"
// ???
