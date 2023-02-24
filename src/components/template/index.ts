/**
 * @author: 1580043700@qq.com
 * @date: 2023/2/23 11:17
 * @description: 模板组件导出
 */


let templateComponents: any = import.meta.glob("@/components/template/*.vue", {eager: true});


let templates: any = Object.keys(templateComponents).reduce((previousValue, currentValue): any => ({
    ...previousValue,
    [templateComponents[currentValue].default.__name]: templateComponents[currentValue].default
}), {})
export default templates;