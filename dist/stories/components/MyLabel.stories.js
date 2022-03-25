import { jsx as _jsx } from "react/jsx-runtime";
import { MyLabel } from "../../components/MyLabel";
export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'color' },
        labelColor: { control: 'select' }
    }
};
const Template = (args) => _jsx(MyLabel, Object.assign({}, args));
export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    label: 'Example',
    allCaps: false
};
export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    label: 'Example',
    allCaps: true
};
export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    labelColor: 'secondary'
};
export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    labelColor: 'tertiary'
};
export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'normal',
    color: '#5517ac'
};
export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    size: 'h1',
    color: '#ffffff',
    backgroundColor: '#000000'
};
