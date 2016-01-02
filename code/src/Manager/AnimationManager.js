var AnimationManager=cc.Class.extend({
    objectToBeAnimated:null,
    animaciones:[],

ctor: function(){
},addAnimationsLink:function(link)
{
 this.objectToBeAnimated = link;
  //Animacion Simple Arriba
     var framesSimple = this.getAnimacion("link_parado_arriba", 3);
     this.objectToBeAnimated.animaciones["SIMPLE_ARRIBA"] = cc.RepeatForever.create(cc.Sequence.create(cc.Animate.create(new cc.Animation(framesSimple, 0.2)),cc.DelayTime.create(2)));
     //Animacion Simple Abajo
     var framesSimpleAbajo = this.getAnimacion("link_parado_abajo", 3);
     this.objectToBeAnimated.animaciones["SIMPLE_ABAJO"] = cc.RepeatForever.create(cc.Sequence.create(cc.Animate.create(new cc.Animation(framesSimpleAbajo, 0.2)),cc.DelayTime.create(2)));
     //Animacion Simple Lado
     var framesSimpleLado = this.getAnimacion("link_parado_derecha", 3);
     this.objectToBeAnimated.animaciones["SIMPLE_DERECHA"] = cc.RepeatForever.create(cc.Sequence.create(cc.Animate.create(new cc.Animation(framesSimpleLado, 0.2)),cc.DelayTime.create(2)));
     this.objectToBeAnimated.animaciones["SIMPLE_IZQUIERDA"] = cc.RepeatForever.create(cc.Sequence.create(cc.Animate.create(new cc.Animation(framesSimpleLado, 0.2)),cc.DelayTime.create(2)));

     //Animacion Caminar Abajo
     var framesCaminarAbajo = this.getAnimacion("link_caminar_abajo", 10);
     var animacionAbajo = new cc.Animation(framesCaminarAbajo, 0.05);
     this.objectToBeAnimated.animaciones["CAMINAR_ABAJO"] = new cc.Sequence(new cc.Animate(animacionAbajo),cc.CallFunc.create(link.setCanMove, link));
     //Animacion Caminar Arriba
     var framesCaminarArriba = this.getAnimacion("link_caminar_arriba", 10);
     var animacionArriba = new cc.Animation(framesCaminarArriba, 0.05);
     this.objectToBeAnimated.animaciones["CAMINAR_ARRIBA"] =new cc.Sequence(new cc.Animate(animacionArriba),cc.CallFunc.create(link.setCanMove, link));
     //Animacion Caminar Derecha
     var framesCaminarDerecha = this.getAnimacion("link_caminar_derecha", 10);
     var animacionDerecha = new cc.Animation(framesCaminarDerecha, 0.05);
     this.objectToBeAnimated.animaciones["CAMINAR_DERECHA"] =new cc.Sequence(new cc.Animate(animacionDerecha),cc.CallFunc.create(link.setCanMove, link));
     this.objectToBeAnimated.animaciones["CAMINAR_IZQUIERDA"] =new cc.Sequence(new cc.Animate(animacionDerecha),cc.CallFunc.create(link.setCanMove, link));
     //Animacion Espada Arriba
     var framesEspadaArriba = this.getAnimacion("link_atacar_arriba", 8);
     var animacionEspArriba = new cc.Animation(framesEspadaArriba, 0.03);
     this.objectToBeAnimated.animaciones["ESPADA_ARRIBA"]  = new cc.Sequence(new cc.Animate(animacionEspArriba),cc.CallFunc.create(link.swordFinished, link));

     //Animacion Espada Abajo
     var framesEspadaAbajo = this.getAnimacion("link_atacar_abajo", 8);
     var animacionEspAbajo = new cc.Animation(framesEspadaAbajo, 0.03);
     this.objectToBeAnimated.animaciones["ESPADA_ABAJO"]  = new cc.Sequence(new cc.Animate(animacionEspAbajo),cc.CallFunc.create(link.swordFinished, link));
     //Animacion Espada Lado
     var framesEspadaDerecha = this.getAnimacion("link_atacar_derecha", 8);
     var animacionEspDerecha = new cc.Animation(framesEspadaDerecha, 0.03);
     this.objectToBeAnimated.animaciones["ESPADA_DERECHA"]  = new cc.Sequence(new cc.Animate(animacionEspDerecha),cc.CallFunc.create(link.swordFinished, link));
     this.objectToBeAnimated.animaciones["ESPADA_IZQUIERDA"]  = new cc.Sequence(new cc.Animate(animacionEspDerecha),cc.CallFunc.create(link.swordFinished, link));

      var framesCaminarAbajo = this.getAnimacion("link_rodar_abajo", 8);
      var animacionAbajo = new cc.Animation(framesCaminarAbajo, 0.05);
      this.objectToBeAnimated.animaciones["RODAR_ABAJO"] = new cc.Sequence(new cc.Animate(animacionAbajo),cc.CallFunc.create(link.rollingFinished, link));
      //Animacion Caminar Arriba
      var framesCaminarArriba = this.getAnimacion("link_rodar_arriba", 8);
      var animacionArriba = new cc.Animation(framesCaminarArriba, 0.05);
      this.objectToBeAnimated.animaciones["RODAR_ARRIBA"] =new cc.Sequence(new cc.Animate(animacionArriba),cc.CallFunc.create(link.rollingFinished, link));
      //Animacion Caminar Derecha
      var framesCaminarDerecha = this.getAnimacion("link_rodar_derecha", 8);
      var animacionDerecha = new cc.Animation(framesCaminarDerecha, 0.05);
      this.objectToBeAnimated.animaciones["RODAR_DERECHA"] =new cc.Sequence(new cc.Animate(animacionDerecha),cc.CallFunc.create(link.rollingFinished, link));
      this.objectToBeAnimated.animaciones["RODAR_IZQUIERDA"] =new cc.Sequence(new cc.Animate(animacionDerecha),cc.CallFunc.create(link.rollingFinished, link));
 }

 , getAnimacion: function (nombreAnimacion, numFrames) {
     var framesAnimacion = [];
     for (var i = 0; i < numFrames; i++) {
         var str = nombreAnimacion + i + ".png";
         var frame = cc.spriteFrameCache.getSpriteFrame(str);
         framesAnimacion.push(frame);
     }
     return framesAnimacion;

 },obtainAnimation: function(key)
 {
          return this.objectToBeAnimated.animaciones[key];
 }


});