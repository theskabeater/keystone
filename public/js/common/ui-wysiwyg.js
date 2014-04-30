jQuery(function($) {

  if (!window.tinymce)
    return;

  var options = {
    selector: 'textarea.wysiwyg',
    menubar: false,
    plugins: ['code', 'link'],
    toolbar: 'bold italic | alignleft aligncenter alignright | bullist numlist | outdent indent | link',
    skin: 'keystone',
    uploadimage_form_url: '/keystone/api/cloudinary/upload'
  };

  if (Keystone.wysiwyg.options.enableImages) {
    options.plugins.push('image');
    options.toolbar += ' | image';
  }

  if (Keystone.wysiwyg.options.paste_as_text) {
    options.plugins.push('paste');
    options.paste_as_text = true;
  }

  if (Keystone.wysiwyg.options.enableCloudinaryUploads) {
    options.plugins.push('uploadimage');
    options.toolbar += (Keystone.wysiwyg.options.enableImages) ? ' uploadimage' : ' | uploadimage';
  }

  if (Keystone.wysiwyg.options.additionalButtons) {
      var additionalButtons = Keystone.wysiwyg.options.additionalButtons.split(',');
      for (var i=0; i<additionalButtons.length; i++) {
        options.toolbar += (' | ' + additionalButtons[i]);
      }
  }

  options.toolbar += ' | code';

  tinymce.init(options);

});
