import{e,r as P}from"./iframe-BDDuDnDY.js";import{P as t}from"./index-D3zwYjk_.js";const a=({title:i,value:b,icon:C,trend:I=null,color:U="primary",size:z="medium",loading:k=!1,onClick:o=null,subtitle:M=null,currency:x=null,percentage:L=!1,animated:N=!0,className:q=""})=>{const D=n=>k?"---":x?`${x}${n}`:L?`${n}%`:n,_=()=>{if(!I)return null;const{direction:n,amount:V,label:T}=I,W=n==="up",O=W?"trend-up":"trend-down";return e.createElement("div",{className:`stat-trend ${O}`},e.createElement("svg",{className:"trend-icon",viewBox:"0 0 12 12",fill:"currentColor"},W?e.createElement("path",{d:"M6 2L10 6H8V10H4V6H2L6 2Z"}):e.createElement("path",{d:"M6 10L2 6H4V2H8V6H10L6 10Z"})),e.createElement("span",{className:"trend-amount"},V),T&&e.createElement("span",{className:"trend-label"},T))},R=["stat-widget",`stat-widget--${U}`,`stat-widget--${z}`,k&&"stat-widget--loading",o&&"stat-widget--clickable",N&&"stat-widget--animated",q].filter(Boolean).join(" ");return e.createElement("div",{className:R,onClick:o,role:o?"button":void 0,tabIndex:o?0:void 0,onKeyDown:o?n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),o(n))}:void 0},e.createElement("div",{className:"stat-widget__icon"},k?e.createElement("div",{className:"stat-widget__spinner"},e.createElement("svg",{viewBox:"0 0 24 24",fill:"none"},e.createElement("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:`${2*Math.PI*10}`,strokeDashoffset:`${2*Math.PI*10*.75}`}))):C),e.createElement("div",{className:"stat-widget__content"},e.createElement("div",{className:"stat-widget__header"},e.createElement("div",{className:"stat-widget__title"},i),_()),e.createElement("div",{className:"stat-widget__value"},D(b)),M&&e.createElement("div",{className:"stat-widget__subtitle"},M)),e.createElement("div",{className:"stat-widget__glow"}),e.createElement("div",{className:"stat-widget__pattern"}))};a.propTypes={title:t.string.isRequired,value:t.oneOfType([t.string,t.number]).isRequired,icon:t.element,trend:t.shape({direction:t.oneOf(["up","down"]).isRequired,amount:t.string.isRequired,label:t.string}),color:t.oneOf(["primary","success","warning","danger","info","neutral"]),size:t.oneOf(["small","medium","large"]),loading:t.bool,onClick:t.func,subtitle:t.string,currency:t.string,percentage:t.bool,animated:t.bool,className:t.string};a.__docgenInfo={description:`StatWidget component displays key metrics and statistics with trend indicators.\r
Perfect for dashboards, analytics interfaces, and KPI monitoring.\r
\r
Features:\r
- Color-coded themes for different metric types\r
- Trend indicators with directional arrows\r
- Responsive design with hover effects\r
- Loading and error states\r
- Customizable sizes and layouts`,methods:[],displayName:"StatWidget",props:{trend:{defaultValue:{value:"null",computed:!1},description:"Trend data with direction and amount",type:{name:"shape",value:{direction:{name:"enum",value:[{value:"'up'",computed:!1},{value:"'down'",computed:!1}],required:!0},amount:{name:"string",required:!0},label:{name:"string",required:!1}}},required:!1},color:{defaultValue:{value:'"primary"',computed:!1},description:"Color theme variant",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'success'",computed:!1},{value:"'warning'",computed:!1},{value:"'danger'",computed:!1},{value:"'info'",computed:!1},{value:"'neutral'",computed:!1}]},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},description:"Widget size variant",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"Loading state",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"null",computed:!1},description:"Click handler function",type:{name:"func"},required:!1},subtitle:{defaultValue:{value:"null",computed:!1},description:"Optional subtitle text",type:{name:"string"},required:!1},currency:{defaultValue:{value:"null",computed:!1},description:"Currency symbol to prefix value",type:{name:"string"},required:!1},percentage:{defaultValue:{value:"false",computed:!1},description:"Whether value represents a percentage",type:{name:"bool"},required:!1},animated:{defaultValue:{value:"true",computed:!1},description:"Enable animations",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Additional CSS classes",type:{name:"string"},required:!1},title:{description:"Widget title/label",type:{name:"string"},required:!0},value:{description:"Main value to display",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!0},icon:{description:"Icon element (React component or JSX)",type:{name:"element"},required:!1}}};const r={Users:()=>e.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"1em",height:"1em"},e.createElement("path",{d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})),DollarSign:()=>e.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"1em",height:"1em"},e.createElement("path",{d:"M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"})),ShoppingCart:()=>e.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"1em",height:"1em"},e.createElement("path",{d:"M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L6 5H4m3 8a2 2 0 102 2 2 2 0 00-2-2zm10 0a2 2 0 102 2 2 2 0 00-2-2z"})),TrendingUp:()=>e.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"1em",height:"1em"},e.createElement("path",{d:"M23 6l-9.5 9.5-5-5L1 18l1.5 1.5 6-6 5 5L23 8V6z"})),Eye:()=>e.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"1em",height:"1em"},e.createElement("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),e.createElement("circle",{cx:"12",cy:"12",r:"3"})),Globe:()=>e.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"1em",height:"1em"},e.createElement("circle",{cx:"12",cy:"12",r:"10"}),e.createElement("path",{d:"M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"})),Clock:()=>e.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"1em",height:"1em"},e.createElement("circle",{cx:"12",cy:"12",r:"10"}),e.createElement("polyline",{points:"12,6 12,12 16,14"}))},B={title:"Dashboard/StatWidget",component:a,parameters:{layout:"centered",docs:{description:{component:`
The StatWidget component displays key metrics and statistics with visual indicators and trend data.

## Features
- **Multiple color themes**: Primary, success, warning, danger, info, and neutral variants
- **Trend indicators**: Visual arrows showing positive/negative trends with percentages
- **Size variants**: Small, medium, and large sizes for different layouts
- **Interactive**: Optional click handlers with proper accessibility
- **Loading states**: Built-in loading spinner and skeleton states
- **Responsive**: Adapts to different screen sizes

## Usage
\`\`\`jsx
import { StatWidget } from './StatWidget';

<StatWidget
  title="Active Users"
  value="1,240"
  icon={<UsersIcon />}
  trend={{ direction: "up", amount: "3.2%" }}
  color="primary"
/>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{title:{description:"Widget title/label",control:{type:"text"}},value:{description:"Main value to display",control:{type:"text"}},icon:{description:"Icon element",control:!1},trend:{description:"Trend data with direction and amount",control:{type:"object"}},color:{description:"Color theme variant",control:{type:"select"},options:["primary","success","warning","danger","info","neutral"]},size:{description:"Widget size variant",control:{type:"select"},options:["small","medium","large"]},loading:{description:"Loading state",control:{type:"boolean"}},onClick:{description:"Click handler function",action:"clicked"},subtitle:{description:"Optional subtitle text",control:{type:"text"}},currency:{description:"Currency symbol to prefix value",control:{type:"text"}},percentage:{description:"Whether value represents a percentage",control:{type:"boolean"}},animated:{description:"Enable animations",control:{type:"boolean"}}}},s={args:{title:"Active Users",value:"1,240",icon:e.createElement(r.Users,null),trend:{direction:"up",amount:"3.2%"},color:"primary"}},c={args:{title:"Monthly Revenue",value:"84,230",currency:"$",icon:e.createElement(r.DollarSign,null),trend:{direction:"down",amount:"1.8%",label:"vs last month"},color:"success",subtitle:"Total earnings this month"}},l={args:{title:"New Orders",value:"348",icon:e.createElement(r.ShoppingCart,null),trend:{direction:"up",amount:"6.5%"},color:"success"}},d={args:{title:"System Alerts",value:"12",icon:e.createElement(r.Clock,null),trend:{direction:"up",amount:"2"},color:"warning",subtitle:"Requires attention"}},u={args:{title:"Critical Errors",value:"3",icon:e.createElement(r.TrendingUp,null),trend:{direction:"down",amount:"67%"},color:"danger",subtitle:"Last 24 hours"}},m={args:{title:"Page Views",value:"45.2K",icon:e.createElement(r.Eye,null),trend:{direction:"up",amount:"12%"},color:"info",size:"small"}},p={args:{title:"Total Revenue",value:"2.4M",currency:"$",icon:e.createElement(r.DollarSign,null),trend:{direction:"up",amount:"23.1%"},color:"success",size:"large",subtitle:"Yearly performance"}},g={args:{title:"Loading Data",value:"Loading...",icon:e.createElement(r.Globe,null),color:"neutral",loading:!0}},v={args:{title:"Server Uptime",value:"99.9",percentage:!0,icon:e.createElement(r.Globe,null),color:"success",subtitle:"Last 30 days"}},f={args:{title:"Click Me",value:"Interactive",icon:e.createElement(r.TrendingUp,null),trend:{direction:"up",amount:"5%"},color:"primary",onClick:i=>alert("Widget clicked!")}},y={args:{title:"API Calls",value:"156K",icon:e.createElement(r.Globe,null),trend:{direction:"up",amount:"8.3%"},color:"info",subtitle:"This month"}},h={args:{title:"Pending Tasks",value:"28",icon:e.createElement(r.Clock,null),color:"neutral",subtitle:"In queue"}},w={args:{title:"Conversion Rate",value:"24.8",percentage:!0,icon:e.createElement(r.TrendingUp,null),trend:{direction:"up",amount:"2.1%"},color:"success"}},E={render:()=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"1.5rem",width:"100%",maxWidth:"1200px"}},e.createElement(a,{title:"Active Users",value:"1,240",icon:e.createElement(r.Users,null),trend:{direction:"up",amount:"3.2%"},color:"primary"}),e.createElement(a,{title:"Revenue",value:"84,230",currency:"$",icon:e.createElement(r.DollarSign,null),trend:{direction:"up",amount:"12.5%"},color:"success"}),e.createElement(a,{title:"Orders",value:"348",icon:e.createElement(r.ShoppingCart,null),trend:{direction:"down",amount:"2.1%"},color:"warning"}),e.createElement(a,{title:"Errors",value:"5",icon:e.createElement(r.TrendingUp,null),trend:{direction:"down",amount:"45%"},color:"danger"})),parameters:{layout:"fullscreen",docs:{source:{code:`
<div className="stat-widget-grid">
  <StatWidget title="Active Users" value="1,240" icon={<UsersIcon />} trend={{ direction: "up", amount: "3.2%" }} color="primary" />
  <StatWidget title="Revenue" value="84,230" currency="$" icon={<DollarIcon />} trend={{ direction: "up", amount: "12.5%" }} color="success" />
  <StatWidget title="Orders" value="348" icon={<CartIcon />} trend={{ direction: "down", amount: "2.1%" }} color="warning" />
  <StatWidget title="Errors" value="5" icon={<TrendIcon />} trend={{ direction: "down", amount: "45%" }} color="danger" />
</div>
        `}}}},S={render:()=>{const[i,b]=P.useState(0);return e.createElement(a,{title:"Click Counter",value:i.toString(),icon:e.createElement(r.TrendingUp,null),trend:i>0?{direction:"up",amount:"100%"}:null,color:"primary",onClick:()=>b(C=>C+1),subtitle:"Click to increment"})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Active Users",
    value: "1,240",
    icon: <MockIcons.Users />,
    trend: {
      direction: "up",
      amount: "3.2%"
    },
    color: "primary"
  }
}`,...s.parameters?.docs?.source},description:{story:"Default story showing a primary themed widget with user statistics",...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Monthly Revenue",
    value: "84,230",
    currency: "$",
    icon: <MockIcons.DollarSign />,
    trend: {
      direction: "down",
      amount: "1.8%",
      label: "vs last month"
    },
    color: "success",
    subtitle: "Total earnings this month"
  }
}`,...c.parameters?.docs?.source},description:{story:"Revenue widget with currency formatting and negative trend",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "New Orders",
    value: "348",
    icon: <MockIcons.ShoppingCart />,
    trend: {
      direction: "up",
      amount: "6.5%"
    },
    color: "success"
  }
}`,...l.parameters?.docs?.source},description:{story:"Orders widget with success theme and positive trend",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "System Alerts",
    value: "12",
    icon: <MockIcons.Clock />,
    trend: {
      direction: "up",
      amount: "2"
    },
    color: "warning",
    subtitle: "Requires attention"
  }
}`,...d.parameters?.docs?.source},description:{story:"Warning themed widget for alerts or issues",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Critical Errors",
    value: "3",
    icon: <MockIcons.TrendingUp />,
    trend: {
      direction: "down",
      amount: "67%"
    },
    color: "danger",
    subtitle: "Last 24 hours"
  }
}`,...u.parameters?.docs?.source},description:{story:"Danger themed widget for critical metrics",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Page Views",
    value: "45.2K",
    icon: <MockIcons.Eye />,
    trend: {
      direction: "up",
      amount: "12%"
    },
    color: "info",
    size: "small"
  }
}`,...m.parameters?.docs?.source},description:{story:"Small size variant for compact layouts",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Total Revenue",
    value: "2.4M",
    currency: "$",
    icon: <MockIcons.DollarSign />,
    trend: {
      direction: "up",
      amount: "23.1%"
    },
    color: "success",
    size: "large",
    subtitle: "Yearly performance"
  }
}`,...p.parameters?.docs?.source},description:{story:"Large size variant for emphasis",...p.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Loading Data",
    value: "Loading...",
    icon: <MockIcons.Globe />,
    color: "neutral",
    loading: true
  }
}`,...g.parameters?.docs?.source},description:{story:"Loading state demonstration",...g.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Server Uptime",
    value: "99.9",
    percentage: true,
    icon: <MockIcons.Globe />,
    color: "success",
    subtitle: "Last 30 days"
  }
}`,...v.parameters?.docs?.source},description:{story:"Widget without trend indicator",...v.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Click Me",
    value: "Interactive",
    icon: <MockIcons.TrendingUp />,
    trend: {
      direction: "up",
      amount: "5%"
    },
    color: "primary",
    onClick: e => alert('Widget clicked!')
  }
}`,...f.parameters?.docs?.source},description:{story:"Clickable widget with interaction",...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "API Calls",
    value: "156K",
    icon: <MockIcons.Globe />,
    trend: {
      direction: "up",
      amount: "8.3%"
    },
    color: "info",
    subtitle: "This month"
  }
}`,...y.parameters?.docs?.source},description:{story:"Info themed widget",...y.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Pending Tasks",
    value: "28",
    icon: <MockIcons.Clock />,
    color: "neutral",
    subtitle: "In queue"
  }
}`,...h.parameters?.docs?.source},description:{story:"Neutral themed widget",...h.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Conversion Rate",
    value: "24.8",
    percentage: true,
    icon: <MockIcons.TrendingUp />,
    trend: {
      direction: "up",
      amount: "2.1%"
    },
    color: "success"
  }
}`,...w.parameters?.docs?.source},description:{story:"Percentage value example",...w.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    width: '100%',
    maxWidth: '1200px'
  }}>\r
      <StatWidget title="Active Users" value="1,240" icon={<MockIcons.Users />} trend={{
      direction: "up",
      amount: "3.2%"
    }} color="primary" />\r
      <StatWidget title="Revenue" value="84,230" currency="$" icon={<MockIcons.DollarSign />} trend={{
      direction: "up",
      amount: "12.5%"
    }} color="success" />\r
      <StatWidget title="Orders" value="348" icon={<MockIcons.ShoppingCart />} trend={{
      direction: "down",
      amount: "2.1%"
    }} color="warning" />\r
      <StatWidget title="Errors" value="5" icon={<MockIcons.TrendingUp />} trend={{
      direction: "down",
      amount: "45%"
    }} color="danger" />\r
    </div>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: \`
<div className="stat-widget-grid">
  <StatWidget title="Active Users" value="1,240" icon={<UsersIcon />} trend={{ direction: "up", amount: "3.2%" }} color="primary" />
  <StatWidget title="Revenue" value="84,230" currency="$" icon={<DollarIcon />} trend={{ direction: "up", amount: "12.5%" }} color="success" />
  <StatWidget title="Orders" value="348" icon={<CartIcon />} trend={{ direction: "down", amount: "2.1%" }} color="warning" />
  <StatWidget title="Errors" value="5" icon={<TrendIcon />} trend={{ direction: "down", amount: "45%" }} color="danger" />
</div>
        \`
      }
    }
  }
}`,...E.parameters?.docs?.source},description:{story:"Dashboard grid layout example",...E.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [clickCount, setClickCount] = useState(0);
    return <StatWidget title="Click Counter" value={clickCount.toString()} icon={<MockIcons.TrendingUp />} trend={clickCount > 0 ? {
      direction: "up",
      amount: "100%"
    } : null} color="primary" onClick={() => setClickCount(prev => prev + 1)} subtitle="Click to increment" />;
  }
}`,...S.parameters?.docs?.source},description:{story:"Interactive example with state management",...S.parameters?.docs?.description}}};const H=["Default","Revenue","Orders","Warnings","Errors","SmallSize","LargeSize","Loading","NoTrend","Clickable","InfoTheme","NeutralTheme","PercentageValue","DashboardGrid","InteractiveExample"];export{f as Clickable,E as DashboardGrid,s as Default,u as Errors,y as InfoTheme,S as InteractiveExample,p as LargeSize,g as Loading,h as NeutralTheme,v as NoTrend,l as Orders,w as PercentageValue,c as Revenue,m as SmallSize,d as Warnings,H as __namedExportsOrder,B as default};
