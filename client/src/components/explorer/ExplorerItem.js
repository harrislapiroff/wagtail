import React from 'react';

import { ADMIN_URLS, STRINGS } from '../../config/wagtail';
import Icon from '../../components/Icon/Icon';
import Button from '../../components/Button/Button';
import PublicationStatus from '../../components/PublicationStatus/PublicationStatus';
import AbsoluteDate from '../../components/AbsoluteDate/AbsoluteDate';

const ExplorerItem = ({ title, typeName, data, filter, onItemClick }) => {
  const { id, meta } = data;

  // If we only want pages with children, get this info by
  // looking at the descendants count vs children count.
  // // TODO refactor.
  let count = 0;
  if (meta) {
    count = filter.match(/has_children/) ? meta.descendants.count - meta.children.count : meta.children.count;
  }

  return (
    <Button href={`${ADMIN_URLS.PAGES}${id}`} className="c-explorer__item">
      {count > 0 ? (
        <span role="button" className="c-explorer__children" onClick={onItemClick.bind(null, id)}>
          <Icon name="folder-inverse" title={STRINGS.SEE_CHILDREN} />
        </span>
      ) : null}

      <h3 className="c-explorer__title">
        {title}
      </h3>

      <p className="c-explorer__meta">
        <span className="c-explorer__meta__type">{typeName}</span> | <AbsoluteDate time={meta ? meta.latest_revision_created_at : null} /> | <PublicationStatus status={meta ? meta.status : null} />
      </p>
    </Button>
  );
};

ExplorerItem.propTypes = {
  title: React.PropTypes.string,
  data: React.PropTypes.object,
  filter: React.PropTypes.string,
  typeName: React.PropTypes.string,
  onItemClick: React.PropTypes.func,
};

ExplorerItem.defaultProps = {
  filter: '',
  data: {},
  onItemClick: () => {},
};

export default ExplorerItem;
