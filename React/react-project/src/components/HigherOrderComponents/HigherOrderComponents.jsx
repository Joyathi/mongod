 //Higher Order Component (HOC) with fucntional components

const withUpperCase = (WarppedComponent) =>{
    return function ({text,...restprops}) {
        const upperCaseText = text.toUpperCase();
        return <WarppedComponent {...restprops} text={upperCaseText}/>
    }
}

//component 
const MyComponent = ({text}) => <div>{text}</div>;

//Usage of HDC

const MyComponentWithUpperCase = withUpperCase(MyComponent);

export default MyComponentWithUpperCase;