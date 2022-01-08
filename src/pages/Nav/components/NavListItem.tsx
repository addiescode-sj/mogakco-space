function NavListItem() {
  const navItemText = [
    '로고',
    '스토어',
    'Mac',
    'iPad',
    'iPhone',
    'Watch',
    'AirPods',
    'TV 및 홈',
    'Apple 독점 제공',
    '액세서리',
    '고객지원',
    '돋보기',
    '장바구니',
  ];

  if (navItemText.length > 0) {
    return (
      <>
        {navItemText.map((text, idx) => (
          <li key={idx}>
            <span>{text}</span>
          </li>
        ))}
      </>
    );
  } else {
    return <></>;
  }
}

export default NavListItem;
