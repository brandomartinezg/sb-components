import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes:{
        size: { control: 'select' },
        color: { control: 'color'},
        labelColor: { control:'select' }
    }
} as ComponentMeta<typeof MyLabel>

const Template:ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args={
    size:'normal',
    label:'Example',
    allCaps:false
}

export const AllCaps = Template.bind({});
AllCaps.args ={
    size:'normal',
    label:'Example',
    allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    size:'normal',
    labelColor:'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size:'normal',
    labelColor:'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size:'normal',
    color: '#5517ac'
}

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    size:'h1',
    color: '#ffffff',
    backgroundColor:'#000000'
}