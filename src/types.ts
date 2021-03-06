export enum BoardPosition {
  TOP_LEFT,
  TOP_CENTRE,
  TOP_RIGHT,
  MIDDLE_LEFT,
  MIDDLE_CENTRE,
  MIDDLE_RIGHT,
  BOTTOM_LEFT,
  BOTTOM_CENTRE,
  BOTTOM_RIGHT,
}

export enum PlayerId {
  PLAYER_ONE = 'PLAYER_ONE',
  PLAYER_TWO = 'PLAYER_TWO',
}

export enum MatchName {
  TOP_ROW = 'TOP_ROW',
  MIDDLE_ROW = 'MIDDLE_ROW',
  BOTTOM_ROW = 'BOTTOM_ROW',
  LEFT_COLUMN = 'LEFT_COLUMN',
  CENTRE_COLUMN = 'CENTRE_COLUMN',
  RIGHT_COLUMN = 'RIGHT_COLUMN',
  DIAGONAL_LEFT_TO_RIGHT = 'DIAGONAL_LEFT_TO_RIGHT',
  DIAGONAL_RIGHT_TO_LEFT = 'DIAGONAL_RIGHT_TO_LEFT',
}

export enum GameStatus {
  PLAYING = 'PLAYING',
  FINISHED = 'FINISHED',
}

export interface PlayerType {
  piece: PlayerId
  name: string
}

export type MatchTuple = [MatchName, BoardPosition[]]

export interface PlayerMatchType {
  match: MatchTuple
  player: PlayerId
}

export type GameMovesType = Record<PlayerId, BoardPosition[]>

export interface GamePlayersType {
  all: PlayerType[]
  active: PlayerId
}

export interface GameStateType {
  players: GamePlayersType
  moves: GameMovesType
  winner: PlayerMatchType | null
  status: GameStatus
}
