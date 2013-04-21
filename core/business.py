'''
Created on 2012-11-7

@author: tony.li
'''
from db import db

def genCategoriesTree():
    """
        generate the cateogories tree data
    """

    def genSingleTree(category, cache_categories):
        category['childs'] = [child for child in cache_categories if child.parent_id == category.id]
        for child in category['childs']:
            genSingleTree(child, cache_categories)
        return category

    categories = db.select('t_category')
    cache_categories = [category for category in categories]
    return [genSingleTree(category, cache_categories) for category in cache_categories if category.parent_id == 0]


def getCategoryPathById(categoryId):
    category = db.select('t_category',where = "id = " + str(categoryId))[0]
    path = category.path.split('$')
    return [db.select('t_category',where = "id = " + pathId)[0] for pathId in path if pathId]

