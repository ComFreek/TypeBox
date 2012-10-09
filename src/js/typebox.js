
var TypeBox;
(function (TypeBox) {
    var Editor = (function () {
        function Editor(txtArea, cmOptions) {
            var options = {
                theme: "typebox"
            };
            for(var attr in cmOptions) {
                options[attr] = cmOptions[attr];
            }
            if(typeof txtArea == "string") {
                txtArea = document.getElementById(txtArea);
            }
            this.cmHandle = CodeMirror.fromTextArea(document.getElementById("txtCode"), options);
        }
        Editor.prototype.setValue = function (newCode) {
            this.cmHandle.setValue(newCode);
        };
        Editor.prototype.getValue = function () {
            return this.cmHandle.getValue();
        };
        return Editor;
    })();
    TypeBox.Editor = Editor;    
})(TypeBox || (TypeBox = {}));

