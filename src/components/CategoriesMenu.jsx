import React from 'react';
import styled from 'styled-components';

const CategoriesMenuContainer = styled.div.attrs({
  className: 'categories-menu-container'
}).withConfig({
  componentId: 'CategoriesMenuContainer'
})`
  width: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 1.2rem 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

const CategoriesRow = styled.div.attrs({
  className: 'categories-row'
}).withConfig({
  componentId: 'CategoriesRow'
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  padding: 0 1rem;
`;

const CategoryItem = styled.span.attrs({
  className: 'category-item'
}).withConfig({
  componentId: 'CategoryItem'
})`
  text-transform: uppercase;
  font-size: 0.9rem;
  line-height: 1.8;
  margin: 0 2rem;
`;

const Separator = styled.span.attrs({
  className: 'category-separator'
}).withConfig({
  componentId: 'Separator'
})`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.2rem;
  color: #444;
`;

const CategoriesMenu = () => {
  const categories = [
    'CONCEPTUAL',
    'ART DIRECTION',
    'EXPERIENTIAL',
    'MOTION + EDIT',
    'DESIGN',
    'AI'
  ];
  
  return (
    <CategoriesMenuContainer>
      <CategoriesRow>
        {categories.map((category, index) => (
          <React.Fragment key={index}>
            {index > 0 && <Separator>·</Separator>}
            <CategoryItem>{category}</CategoryItem>
          </React.Fragment>
        ))}
      </CategoriesRow>
    </CategoriesMenuContainer>
  );
};

export default CategoriesMenu; 