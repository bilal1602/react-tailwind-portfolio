import photo from "./photo.jpg";
import resume from "./Muhammad Bilal Resume.pdf";
const content = {
	nav: {
		logo: "MBS",
		links: [
			{ number: "01.", text: "Home", to: "header" },
			{ number: "02.", text: "About", to: "about" },
			{ number: "03.", text: "Tools", to: "stack" },
			// { number: "02.", text: "Work", to: "mywork" },
		],
		resume,
	},
	header: {
		img: photo,
		// img: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80",
		imgPlaceholder:
			"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gIcSUNDX1BST0ZJTEUAAQEAAAIMbGNtcwIQAABtbnRyUkdCIFhZWiAH3AABABkAAwApADlhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAF5jcHJ0AAABXAAAAAt3dHB0AAABaAAAABRia3B0AAABfAAAABRyWFlaAAABkAAAABRnWFlaAAABpAAAABRiWFlaAAABuAAAABRyVFJDAAABzAAAAEBnVFJDAAABzAAAAEBiVFJDAAABzAAAAEBkZXNjAAAAAAAAAANjMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAElYAABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAAADFgAAAzMAAAKkWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAAAAAkoAAAD4QAALbPY3VydgAAAAAAAAAaAAAAywHJA2MFkghrC/YQPxVRGzQh8SmQMhg7kkYFUXdd7WtwegWJsZp8rGm/fdPD6TD////bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIABkAGQMBIgACEQEDEQH/xAAbAAABBAMAAAAAAAAAAAAAAAAHAgUGCQMECv/EAC4QAAICAQIEAgkFAAAAAAAAAAIDAQQFBhEABxITFCEIFRYiMVKx0fAyQ1GBkf/EABkBAAIDAQAAAAAAAAAAAAAAAAAHAQIDBP/EACURAQACAgEDAwUBAAAAAAAAAAECAwQRMQASIQUTYRQiI0Fxgf/aAAwDAQACEQMRAD8A4u0pbYapCFm1zmApSgGSNjGFAgADG8kRFMCMR5zMxwf63o+82cVg8dq3PctNX4rSbrO1rVBYx12lWRuMS469Q2mKkwUdzqTJFYYCSJc+7Ma5D43RuW5r6Op6/wBYp0FpMsgxmV1S7GNzHq7tVXnj4Vj1IsS5j8p4JRSxcpVXl7GTED53jZHKa50bypt6T5n809N8ztC2tGk6PZjS1rQ2ZxdGU2rGPsWr9BOIVXBD1ItDjr1DKW710SYu89Fzw3DahjEsPMypMkorh7carcfvLHIx65WZFMrfqY45XcxrnCnttue2Nv4Lo9Kamxn6n6ZgRIx+svtL7cinMKSiGHmX114mRDFlh2Zk78Ubq7MuueNiRlOdS5eJNoh1SnI4oQp2aLkKsiR0n2BBFhi1mYs8QgOqUvkegir9whRBdsSbt3JgPUf4U/bgscwsXjKOPwt8s3ey2cysJv2l2jiDqDYqdy3SsVfOzWdUedaAtPkQyY2CbWWoENARPuHyl/p8chvRv9gnPCCPnnZpE8aTra6JCyUQ0CmtxdIon2uhERORE+etnF3n4vIUsigFm2nZVZAWrU0ClRRPSa3rcohONxmDUcbTMwO8RPBNzXOLWWZXbxtXIMwWAsjaWGncc5kYeom4Szs1qVU9wrrc9fiDgB3F7GsTCBYQyKeMf7n58vESieZfvt7Xy+Ykiek4TujF0nIPIdELbIhAkkSz3Inj7bGLWzi67oya5SgsU3GTF2KLvk7k2QrDO3cUrpYyZkiZJe9uZfEyH4RJdRREREzPDR3T/n6/fhU/qH+/pwrgiaifw18GuOq2O5r/AD/fl6//2Q==",
		text: ["Hi, my name is", "Muhammad Bilal"],
		typical: ["Frontend developer 🖥️", 2000, "Backend Developer 💻", 2000],
		subHeading: "Frontend + Backend Developer ",
		// subHeading: "I code and I know things",
		btnText: "Discover More",
	},

	stack: {
		tech: [
			{
				img: process.env.PUBLIC_URL + "/assets/mongo.png",
				alt: "MongoDB",
			},
			{
				img: process.env.PUBLIC_URL + "/logo512.png",
				alt: "React",
			},
			{
				img: process.env.PUBLIC_URL + "/assets/express.png",
				alt: "Express",
			},
			{
				img: process.env.PUBLIC_URL + "/assets/node.png",
				alt: "Node.js",
			},
		],
		tech_2: [
			{
				img: process.env.PUBLIC_URL + "/assets/redux.png",
				alt: "Redux",
			},
			{
				img: process.env.PUBLIC_URL + "/assets/python.png",
				alt: "Python",
			},
			{
				img: process.env.PUBLIC_URL + "/assets/firebase.png",
				alt: "Firebase",
			},
		],
	},
	about: {
		desc: [
			"Hello! My name is Muhammad Bilal and I enjoy creating things that live on the internet. My interest in Modern Applications started back in 2013 when I decided to try editing custom features in my iPhone — turns out hacking together a custom home screen animations is a lot of fun!",
			"Fast-forward to today, and I've had the privilege of working at a huge Software Service Providor, 2 start-ups and numerous short term clients. My main focus these days is building accessible, exclusive products and digital experiences at SurveyAuto for a variety of FMCG companies.",
		],
	},
};
export default content;
