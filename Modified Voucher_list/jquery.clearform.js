$.fn.clearForm = function() {
  return this.each(function() {
    var type = this.type, tag = this.tagName.toLowerCase();
    if (tag == 'form')
      return $(':input',this).clearForm();
    if (type == 'text'  || tag == 'textarea')
      this.value = '';
    else if (type == 'checkbox' || type == 'radio')
    {  this.checked = false;
      this.value=0;
    }
    else if (tag == 'select')
      this.selectedIndex = -1;
  });
};