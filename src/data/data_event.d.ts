declare interface Data_EventPageConditions {
  actorId: number;
  actorValid: boolean;
  itemId: number;
  itemValid: boolean;
  selfSwitchCh: string;
  selfSwitchValid: boolean;
  switch1Id: number;
  switch1Valid: boolean;
  switch2Id: number;
  switch2Valid: boolean;
  variableId: number;
  variableValid: boolean;
  variableValue: number;
}

declare interface Data_EventImage {
  tileId: number;
  characterName: string;
  direction: number;
  pattern: number;
  characterIndex: number;
}

declare interface Data_EventMoveRoute {
  list: any /*TODO Data_RouteCommand*/[];
  repeat: boolean;
  skippable: boolean;
  wait: boolean;
}

declare interface Data_EventPage {
  conditions: Data_EventPageConditions;
  directionFix: boolean;
  image: Data_EventImage;
  list: Data_Command[];
  moveFrequency: number;
  moveRoute: Data_EventMoveRoute;
  moveSpeed: number;
  moveType: number; //TODO
  priorityType: number; //TODO
  stepAnime: boolean;
  through: boolean;
  trigger: number; //TODO
  walkAnime: boolean;
}

declare interface Data_Event {
  id: number;
  name: string;
  note: string;
  pages: Data_EventPage[];
  x: number;
  y: number;
}
