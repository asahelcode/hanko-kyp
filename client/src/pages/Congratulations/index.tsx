import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import { Hanko } from "@teamhanko/hanko-elements";
import { Header } from "../../components";
import { Fireworks } from 'fireworks-js'
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_APIKEY;
const prizePoint = 200;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface CongratulationsProp {
    point: number
}

const Congratulations = ({ point }: CongratulationsProp) => {
    const hankoApiUrl = import.meta.env.VITE_HANKO_API_URL;
    const navigate = useNavigate();
    const hanko = new Hanko(hankoApiUrl);
    const [userInfo, setUserInfo] = useState({
        email: "",
        id: ""
    });
    const containerRef = useRef(null);

    useEffect(() => {
        if (!hanko.session.isValid()) {
            navigate("/");
        } else {
            if(point !== prizePoint) {
                navigate("/play");
            }

            (async () => {
                const { id, email } = await hanko.user.getCurrent();
                setUserInfo({ email, id });
            }
            )()
            if (containerRef.current) {
                const container = containerRef.current;

                container.style.position = 'fixed';
                container.style.top = 0;
                container.style.left = 0;
                container.style.width = '100vw';
                container.style.height = '100vh';

                const fireworks = new Fireworks(container, {
                    autoresize: true,
                    opacity: 0.5,
                    acceleration: 1.05,
                    friction: 0.97,
                    gravity: 1.5,
                    particles: 70,
                    traceLength: 3,
                    traceSpeed: 10,
                    explosion: 5,
                    intensity: 30,
                    flickering: 30,
                    lineStyle: 'round',
                    hue: {
                        min: 0,
                        max: 360
                    },
                    delay: {
                        min: 10,
                        max: 60
                    },
                    rocketsPoint: {
                        min: 50,
                        max: 50
                    },
                    lineWidth: {
                        explosion: {
                            min: 1,
                            max: 3
                        },
                        trace: {
                            min: 1,
                            max: 2
                        }
                    },
                    brightness: {
                        min: 50,
                        max: 80
                    },
                    decay: {
                        min: 0.015,
                        max: 0.03
                    },
                    mouse: {
                        click: false,
                        move: false,
                        max: 1
                    }
                })
                fireworks.launch(20);
            }
        }

    }, [hanko.session, navigate]);


    const generateRandomNumber = () => {
        const timestamp = Date.now();
        const randomSeed = timestamp % 1000000; // Adjust the range as needed
        const randomNumber = Math.floor(Math.random() * randomSeed) + userInfo.id;

        return randomNumber;
    };

    const handleWhatsAppClick = async () => {
        // Construct a WhatsApp message with the data URL (screenshot)
        const phoneNumber = '+2347052899465'; // Replace with the recipient's phone number
        const referenceId = generateRandomNumber();
        const message = `Hello, my email is ${userInfo.email}, I just won N500 and here is my reference id: ${referenceId}`;
        const whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}`;

        try {
            const { data, error } = await supabase
                .from('winner')
                .insert({ user_email: userInfo.email, referenceid: referenceId })
                .select()

            console.log('successfully uploaded', data);
        } catch (err) {
            console.log(err)
        }

        // Open the WhatsApp link in a new tab
        window.open(whatsappLink, '_blank');
    };

    return (
        <>
            <Header />
            <div className="relative h-screen flex items-center justify-center text-center">
                <div className="absolute w-full text-dark z-20 flex flex-col justify-center items-center">
                    <p className="font-sora text-5xl font-semibold">Congratulations</p>
                    <p className="tracking-wide text-lg">You have finally hit 500 points</p>
                    <button
                        onClick={handleWhatsAppClick}
                        className="p-4 bg-gray-200 text-gray-800 rounded-md font-sora font-semibold shadow-md"
                    >
                        Get reward
                    </button>

                    <span className="text-lg text-gray-400 font-medium font-works mt-10">Remember to send Screenshot of this page</span>
                </div>
                <div className="-z-20" ref={containerRef}></div>
            </div>
        </>
    )
}

export default Congratulations