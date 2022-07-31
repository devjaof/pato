// boilerPlate code
const Application = PIXI.Application;
const app = new Application({
  width: 500,
  height: 500,
  transparent: false,
  antialias: true
});
app.renderer.backgroundColor = 0xFCFBB0;
app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.view.style.position = 'absolute';
document.body.appendChild(app.view);

// shapes
const Graphics = PIXI.Graphics;

// particles container
  const particleContainer = new PIXI.ParticleContainer(1000, {
    position: true,
    rotation: true,
    vertices: true,
    tint: true,
    uvs: true
  })

// loader
  const loader = PIXI.Loader.shared;

  // pato
  loader.add('patoTexture', './assets/character/pato.png')
  .load(patoSetup);

  function patoSetup(loader, resources){
    const patoSprite = new PIXI.Sprite(resources.patoTexture.texture);
    patoSprite.y = 600;
    patoSprite.x = 600;
    patoSprite.width = 100;
    patoSprite.height = 100;
    patoSprite.interactive = true;
    patoSprite.buttonMode = true;

    // interactions
      document.addEventListener('keydown', (e) => {
        if(e.key === 'ArrowRight') {
          patoSprite.x += 10;
        }
        if(e.key === 'ArrowLeft') {
          patoSprite.x -= 10;
        }
        if(e.key === 'ArrowUp') {
          patoSprite.y -= 10;
        }
        if(e.key === 'ArrowDown') {
          patoSprite.y += 10;
        }
      })

    app.stage.addChild(patoSprite);
  }

  
  // background
    // sun
    sunTexture = PIXI.Texture.from('./assets/background-layers/sun.png');
    const sunSprite = new PIXI.TilingSprite(
      sunTexture,
      width = 192,
      height = 192,
    );

    sunSprite.tileScale.set(3, 3);
    sunSprite.position.set(1080, 50)
    app.stage.addChild(sunSprite);

    // clouds
    cloudsTexture = PIXI.Texture.from('./assets/background-layers/clouds-day.png');
    const cloudsSprite = new PIXI.TilingSprite(
      cloudsTexture,
      app.screen.width,
      height = 140,
    );

    cloudsSprite.tileScale.set(4, 4);
    app.ticker.add(function() {
      cloudsSprite.tilePosition.x -= 0.6;
    });

    app.stage.addChild(cloudsSprite);

    cloudsTexture2 = PIXI.Texture.from('./assets/background-layers/clouds-day.png');
    const cloudsSprite2 = new PIXI.TilingSprite(
      cloudsTexture2,
      app.screen.width,
      height = 140,
    );

    cloudsSprite2.tileScale.set(4, 4);
    cloudsSprite2.position.set(0, 180);
    app.ticker.add(function() {
      cloudsSprite2.tilePosition.x -= 0.4;
    });

    app.stage.addChild(cloudsSprite2);

  
    // mountains
    mountainsTexture = PIXI.Texture.from('./assets/background-layers/mountains-day.png');
    const mountainsSprite = new PIXI.TilingSprite(
      mountainsTexture,
      app.screen.width,
      height = 175,
    );

    mountainsSprite.tileScale.set(5, 5);
    mountainsSprite.position.set(0, 400);

    app.ticker.add(function() {
      mountainsSprite.tilePosition.x -= 0.2;
    });

    app.stage.addChild(mountainsSprite);

    smallMountainsTexture = PIXI.Texture.from('./assets/background-layers/small-mountains-day.png');
    const smallMountainsSprite = new PIXI.TilingSprite(
      smallMountainsTexture,
      app.screen.width,
      height = 80,
    );

    smallMountainsSprite.tileScale.set(5, 5);
    smallMountainsSprite.position.set(0, 500);

    app.ticker.add(function() {
      smallMountainsSprite.tilePosition.x -= 0.1;
    });

    app.stage.addChild(smallMountainsSprite);


  
 // loader signals
 loader.onProgress.add(function(){console.log('Loading process')});
 loader.onLoad.add(function(){console.log('Loaded')});
 loader.onError.add(function(e){console.log('error -> ', e)});


 // sounds
 const sound = new Howl({
  src: ['./assets/sounds/backgrounds.mp3']
 })

 sound.play();