import PropTypes from 'prop-types';

const MyComponent = (props) => {
    const { name, children } = props

    return (
        <div>
            저는 {name}입니다. <br />
            저는 {children}입니다.
        </div>
    )

    MyComponent.defaultProps = {
        name: '기본 이름'
    }

    MyComponent.PropTypes = {
        name: PropTypes.string.isRequired
    }
}

export default MyComponent