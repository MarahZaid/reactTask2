import style from './product.module.css';

export default function Product(props){
    return (
        <div className={style.card}>
            
            <div className={style.imageBox}>
                <img src={props.thumbnail} alt={props.title} />
            </div>

            <div className={style.content}>
                <h3 className={style.title}>{props.title}</h3>

                <p className={style.category}>{props.category}</p>

                <div className={style.info}>
                    <span className={style.price}>${props.price}</span>
                    <span className={style.rating}>⭐ {props.rating}</span>
                </div>
            </div>

        </div>
    )
}
