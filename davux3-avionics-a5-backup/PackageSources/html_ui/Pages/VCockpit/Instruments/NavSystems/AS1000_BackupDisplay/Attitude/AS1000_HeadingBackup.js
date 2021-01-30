class Backup_Heading extends NavSystemElement {
    constructor() {
        super();
    }
    init(root) {
       this.headingElement = this.gps.getChildById("value");
    }
    onEnter() {
    }
    onUpdate(_deltaTime) {
        let hdg = Math.round(Simplane.getHeadingMagnetic(), 0).toString();
        while (hdg.length < 3) hdg = "0" + hdg; // Add leading zeros.
        Avionics.Utils.diffAndSet(this.headingElement, hdg);
    }
    onExit() {
    }
    onEvent(_event) {
    }
}