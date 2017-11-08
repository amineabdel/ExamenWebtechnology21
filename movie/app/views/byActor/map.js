function(doc) {
   if(doc.type === 'Actor') {
	   emit(doc.actor, doc);
   }
};