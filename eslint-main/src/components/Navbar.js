import React from 'react';
import PropTypes from 'prop-types'; // PropTypesのインポート

function Navbar({ title }) {
  return <nav>{title}</nav>;
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired, // titleは必須の文字列として定義
};

Navbar.defaultProps = {
  title: 'Default Navbar Title', // デフォルトのタイトルを設定
};

export default Navbar;
