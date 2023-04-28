import React, { useEffect, useState } from "react";
const url = "https://api.unsplash.com/photos/?client_id=";
// const ACCESS_KEY = "upsgrKcSQVVZnyeccKkrwFtR7RT5amkn1PpoXAsgl0E";

const FetchPhoto = () => {
	const [data, setData] = useState();

	const fetchData = async () => {
		await fetch(
			`${process.env.REACT_APP_UNSPLASH_URL}client_id=${process.env.REACT_APP_UNSPLASH_KEY}`
		) //https://jsonplaceholder.typicode.com/todos/1
			.then((response) => response.json())
			.then((json) => {
				setData(json);
				console.log(json);
			})
			.catch((error) => console.log("ERROR OCURRED: " + error));
	};

	useEffect(() => {
		fetchData();
		console.log("data: " + JSON.stringify(data));
	}, []);
	return (
		<div>
			<h1>Photos</h1>
			<br />
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{data && (
					<div>
						{data.map((item) => {
							return (
								<div
									key={item.id}
									style={{ display: "flex", flexDirection: "column" }}
								>
									<img
										src={item.urls.raw}
										alt=""
										width="100px"
										height="100px"
									/>
									<h3>{item.user.first_name}</h3>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default FetchPhoto;
