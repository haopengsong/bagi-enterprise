import * as React from 'react';

import { AppChat } from '../src/apps/chat/AppChat';
import { markNewsAsSeen } from '../src/apps/news/news.version';

import { withLayout } from '~/common/layout/withLayout';


export default function NewsPage() {
  // 'touch' the last seen news version
  // React.useEffect(() => markNewsAsSeen(), []);

  return withLayout({ type: 'optima'}, <AppChat />);
}