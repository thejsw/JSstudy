const MyComponent = (props) => {
    return (
        <div>
            저는 {props.name}입니다. <br />
            저는 {props.children}입니다.
        </div>
    )
}

export default MyComponent