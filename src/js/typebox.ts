declare var CodeMirror;

module CM {
  interface ChangeEvtData {
    from: number;
    to: number;
    next: number;
    text: string;
  }
  
  interface ChangeEvt {
    (any, data: ChangeEvtData);
  }

  interface ViewportChangeEvt {
    (any, start: number, end: number);
  }

  interface GutterClickEvt {
    (any, lineNr: number, mouseEvt: MouseEvent);
  }

  interface DragDropEvt {
    (any, dragEvt: DragEvent);
  }

  interface KeyEvtData extends KeyboardEvent {
    stop: () => any;
  }

  interface KeyEvt {
    (any, keyEvt: KeyEvtData);
  }

  export interface Options {
    value ?: string;
    mode ?: string;
    theme ?: string;
    identUnit ?: number;
    smartIndent ?: bool;
    tabSize ?: number;
    indentWithTabs ?: bool;
    electricChars ?: bool;
    autoClearEmptyLines ?: bool;
    keyMap ?: string;
    extraKeys ?: any;
    lineWrapping ?: bool;
    lineNumbers ?: bool;
    firstLineNumber ?: number;
    lineNumberFormatter ?: () => number;
    gutter ?: bool;
    fixedGutter ?: bool;
    readOnly ?: bool;
    onChange ?: ChangeEvt;
    onCursorActivity ?: () => any;
    onViewportChange ?: ViewportChangeEvt;
    onGutterClick ?: GutterClickEvt;
    onFocus ?: () => any;
    onBlur ?: () => any;
    onScroll ?: () => any;
    onUpdate ?: () => any;
    matchBrackets ?: bool;
    cursorBlinkRate ?: number;
    workTime ?: number;
    workDelay ?: number;
    pollInterval ?: number;
    undoDepth ?: number;
    tabindex ?: number;
    autofocus ?: bool;
    dragDrop ?: bool;
    onDragEvent ?: DragDropEvt;
    onKeyEvent ?: KeyEvt;
  }
}

module TypeBox {
  export class Editor {

    public cmHandle: any;

    constructor (txtArea: Element, cmOptions: CM.Options);
    constructor (txtAreaID: string, cmOptions: CM.Options);
    constructor (txtArea, cmOptions: CM.Options) {
      var options : CM.Options = {
        theme: "typebox"
      };

      for (var attr in cmOptions) {
        options[attr] = cmOptions[attr];
      }

      if (typeof txtArea == "string") {
        txtArea = document.getElementById(txtArea);
      }
      this.cmHandle = CodeMirror.fromTextArea(document.getElementById("txtCode"), options);
    }

    setValue(newCode: string) {
      this.cmHandle.setValue(newCode);
    }

    getValue(): string {
      return this.cmHandle.getValue();
    }
  }
}