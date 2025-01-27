/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {
    config.language="en";
    config.language="en";
    config.removePlugins = 'exportpdf'
    config.resize_dir = 'both';
    config.width = '800'
    config.fontSize_defaultLabel = '14px';
    config.toolbar_mini = [
        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'Ju\
stifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
        { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
        { name: 'insert', items: [ 'Table', 'HorizontalRule','SpecialChar' ] },
        { name: 'edit', items: ['Undo', 'Redo'] }
    ];
    config.specialChars = ['‸','°','⨁','✓','æ','±','×','÷','†','‡',
                           '∓','∴','↑','↟','↓','↡',
                           'Α','Β','Γ','Δ','Ε','Ζ','Η','Θ','Ι','Κ','Λ','Μ',
                           'Ν','Ξ','Ο','Π','Ρ','Σ','Τ','Υ','Φ','Χ','Ψ','Ω',
                           'α','β','γ','δ','ε','ζ','η','θ','ι','κ','λ','μ',
                           'ν','ξ','ο','π','ρ','ς','σ','τ','υ','φ','χ','ψ','ω'];


    config.toolbar='mini';
    config.disableNativeSpellChecker = false;
};
