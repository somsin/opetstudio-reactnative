'use strict';

import Render from './AppRender.native';

console.log('AppRender.android function');

export default function () {
  return Render.call(this, this.props, this.state);
}
