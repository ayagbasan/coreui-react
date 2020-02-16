import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSidebarNavLink from './CSidebarNavLink';

//component - CoreUI / CSidebarNavItem

const CSidebarNavItem = props=>{

  const {
    tag: Tag,
    children,
    className,
    custom,
    //
    innerRef,
    linkClassName,
    linkProps,
    ///
    icon,
    to,
    badge,
    ...attributes
  } = props;

  let link = {...linkProps};

  //render

  const classes = classNames(
    className,
    'c-sidebar-nav-item'
  );

  const linkClasses = classNames(
    linkClassName
  );

  !link && (link={})
  icon && (link.icon = icon);
  to && (link.to = to);
  badge && (link.badgeProps = badge);

  return (
    !custom ?
      <Tag className={classes} {...attributes} ref={innerRef}>
        <CSidebarNavLink className={linkClasses} {...link} children={children} />
      </Tag> :
      <Tag className={classes} {...attributes} ref={innerRef} children={children} />
  );

}

CSidebarNavItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  custom: PropTypes.bool,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  linkClassName: PropTypes.string,
  linkProps: PropTypes.object,
  ///
  icon: PropTypes.oneOfType(['string', 'object']),
  badge: PropTypes.object,
};

CSidebarNavItem.defaultProps = {
  tag: 'li'
};

export default CSidebarNavItem;