var Rupia = cc.Class.extend({
    space:null,
    sprite:null,
    shape:null,
    layer:null,
ctor:function (space, posicion, layer) {
    this.space = space;
    this.layer = layer;


    // Crear Sprite - Cuerpo y forma
    this.sprite = new cc.PhysicsSprite(res.rupiaazul_colectable_png);
    // Cuerpo estática , no le afectan las fuerzas
    var body = new cp.StaticBody();
    body.setPos(posicion);
    this.sprite.setBody(body);
    // Los cuerpos estáticos nunca se añaden al Space
    var radio = this.sprite.getContentSize().width / 2;
    // forma
    this.shape = new cp.BoxShape(body,
                this.sprite.getContentSize().width,
                this.sprite.getContentSize().height);
    this.shape.setCollisionType(tipoRupia);
    // Nunca genera colisiones reales
    this.shape.setSensor(true);
    // forma estática
    this.space.addStaticShape(this.shape);
    // añadir sprite a la capa



    layer.addChild(this.sprite,10);

}, getShape: function (){
      return this.shape;

 }, eliminar: function (){
     // quita la forma
     this.space.removeShape(this.shape);

     // quita el sprite
     this.layer.removeChild(this.sprite);
 }
});