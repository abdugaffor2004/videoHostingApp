import s from './videoSection.module.css'

export default function VideoSection({id}){

    return(
        <div className={s.videoWrapper}>
            <div>
                <video  style={{borderRadius:'20px'}}
                        src={`/api/videos/?videoId=${id}`}
                        width='1150px'
                        height= 'auto'
                        controls
                        // autoPlay
                        />

                <h1 className={s.videoTitle}>Gladiator film</h1>
                <p className={s.videoDescription}> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nulla esse temporibus. Iure voluptas tenetur suscipit quasi. Deleniti quidem nisi sapiente, neque culpa est quia ducimus aspernatur laboriosam. Fugiat, architecto?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat hic molestiae consequuntur error tempora enim est labore quidem nam laudantium, voluptas reiciendis aliquam perspiciatis sint voluptatibus minus. Adipisci, consectetur reprehenderit!
                </p>
            </div>
            
        </div>
    )
} 