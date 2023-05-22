class XD {}

class LOL extends XD {
    constructor() {
        super();
    }
}

interface Haha {
    new(a: number): XD;
}

let haha: Haha = LOL;

new haha(2);

let a = new Window();

SceneManager.catchException(2 as unknown as Error);

let c: Html5AudioConstructor

AudioManager.checkWebAudioError(Html5Audio);
AudioManager.checkWebAudioError(new WebAudio(""));

/*
class Item {}
class Game_Battler {}
class Game_Action {}
class Window_BattleLog{}
class Window_BattleStatus{}
class Spriteset_Battle{}
class Game_Actor{}
class ActionState{}
class SavefileCharacter{}
class SavefileFace {}
class Scene{}
*/

function aaaa() {
    let code: Data_Command = {
        code: Data_CommandType.ShowText,
        indent: 0,
        parameters: [1]
    }
}

function f(data: Data_CommandParameters) {
    let b = data[Data_CommandType.ConditionalBranch];
}
