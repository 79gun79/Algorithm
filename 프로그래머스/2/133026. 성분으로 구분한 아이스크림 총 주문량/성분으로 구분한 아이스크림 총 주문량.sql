-- 코드를 입력하세요
SELECT INGREDIENT_TYPE, sum(TOTAL_ORDER) as TOTAL_ORDER
from FIRST_HALF, ICECREAM_INFO
where FIRST_HALF.FLAVOR = ICECREAM_INFO.FLAVOR
GROUp BY INGREDIENT_TYPE
