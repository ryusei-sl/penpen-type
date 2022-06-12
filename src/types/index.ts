//ボタン
export type button = {
  click: () => void;
  action: string;
  disabled?: boolean;
  color: string;
}[];
