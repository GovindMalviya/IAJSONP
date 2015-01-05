IAJSONP
=======

Lightweight cross domain JSON request (JSONP) library.

Example code : 
--------
<pre>
<code>
&lt;script type="javascript/text">
IAJSONP.get("http://graph.facebook.com/http:///www.google.com",function(data){
  alert(data.shares);
});
&lt;/script>
</code>
</pre>
