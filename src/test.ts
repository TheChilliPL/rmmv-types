class XD {}

class LOL extends XD {
  constructor() {
    super();
  }
}

interface Haha {
  new (a: number): XD;
}

function test(battler: Game_BattlerBase) {}

let effect = Data_BattlerEffectType.Whiten;

let haha: Haha = LOL;

let aa = new Game_Picture();
aa._blendMode = PIXI.BlendMode.NORMAL;

new haha(2);

let a = new Window();

let route: Data_EventMoveRoute = {
  list: [
    {
      code: Data_RouteCommandType.MoveDown,
      // parameters: [PIXI.BLEND_MODES.ADD_NPM]
    } as Data_RouteCommand<Data_RouteCommandType.MoveDown>,
  ],
  repeat: false,
  skippable: false,
  wait: false,
};

SceneManager.catchException(2 as unknown as Error);

let c: Html5AudioConstructor;

AudioManager.checkWebAudioError(Html5Audio);
AudioManager.checkWebAudioError(new WebAudio(""));

let followers = new Game_Followers();

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
    parameters: [1],
  };
}

function f(data: Data_CommandParameters) {
  let b = data[Data_CommandType.ConditionalBranch];
}

let int = new Game_Interpreter(1);

int.gameDataOperand(Data_ControlVariablesByGameDataOperandType.Item, 1);
int.gameDataOperand(
  Data_ControlVariablesByGameDataOperandType.Actor,
  1,
  Data_ControlVariablesByGameDataActorOperandType.Level,
);
int.gameDataOperand(
  Data_ControlVariablesByGameDataOperandType.Enemy,
  1,
  Data_ControlVariablesByGameDataEnemyOperandType.Hp,
);
int.gameDataOperand(
  Data_ControlVariablesByGameDataOperandType.Character,
  1,
  Data_ControlVariablesByGameDataCharacterOperandType.MapX,
);

int.operateVariable(1, Data_ControlVariablesOperationType.Set, 2);

let actorSprite = new Sprite_Actor(new Game_Actor(1));

function xdddd(params: Data_CommandParameters, type: Data_CommandType) {
  let b = params[type];
}

function hmuxvutmr(wc: Window_Command) {
  wc.addCommand("a", "a", true, 2);
}

function nuveurvmrt(params: Data_BattlerParams, xparams: Data_BattlerXParams) {
  let b = params[Data_BattlerParamId.Attack];
}

function gmyhbcyrmb(weapon: Game_Item<Data_Weapon>) {
  weapon.setEquip(true, 1);
  weapon.setEquip(false, 1);
  weapon.setObject({} as Data_Armor);

  let equipItem: Game_Item<Data_EquipItem> = weapon;
  equipItem.setEquip(true, 1);
  equipItem.setObject({} as Data_Armor);

  let item: Game_Item<Data_ItemBase> = weapon;
  item.setEquip(true, 1);

  item.setObject(null);
}
