package com.thoughtworks.ketsu.infrastructure.mybatis.mappers;


import com.thoughtworks.ketsu.domain.category.Category;

import java.util.List;

public interface CategoryMapper {

    List<Category> findAll();

    int insertCategory(Category category);

    int deleteCategoryById(Integer id);

    int updateCategory(Category category);

    Category findCategoryById(Integer id);
}