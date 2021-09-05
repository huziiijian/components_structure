/*
 * @Description: 
 * @Autor: zijian.hu01
 * @Date: 2021-09-05 23:40:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-05 23:40:03
 */

const randomNum=()=>Math.floor(Math.random()*100);
const getRandomColor=()=>`rgb(${randomNum()},${randomNum()},${randomNum()})`;

export default getRandomColor