import * as React from 'react';
import TiledImage from '../TiledImage';
import { arch } from 'os';

interface SpriteProps {
  image: string;
  columnCount: number;
  rowCount: number;
  refreshDelay: number;
  loopColumns: boolean;
  scale: number;
  row: number;
}

export class Sprite extends React.Component<SpriteProps> {
  tiledImage: TiledImage;

  constructor(props: SpriteProps) {
    super(props);

    // Create the TiledImage object
    this.tiledImage = new TiledImage(props.image, props.columnCount, props.rowCount, props.refreshDelay, props.loopColumns, props.scale);
    this.tiledImage.changeRow(props.row);
  }

  getTiledImage = () => {
    return this.tiledImage;
    }

  render() {
    return null;
  }
}
