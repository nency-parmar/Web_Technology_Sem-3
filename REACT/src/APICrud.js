import React, { useEffect, useState } from 'react'

const APICrud = () => {
	const [data, setData] = useState([]);
	const [isFormUpdating, setIsFormUpdating] = useState(false);
	const [form, setForm] = useState({
		id: "",
		name: "",
		color: "",
		city: "",
		phone: ""
	});

	useEffect(() => {
		getAllData();
	}, []);

	const getAllData = async () => {
		await fetch("https://65090cb8f6553137159ae712.mockapi.io/information")
			.then((res) => { return res.json() })
			.then((res) => { setData(res) })
	}
	const addForm = async (e) => {
		e.preventDefaults();
		await fetch("https://65090cb8f6553137159ae712.mockapi.io/information",
			{
				method: "POST",
				body: JSON.stringify(form),
				headers: {
					"Content-Type": "application/json"
				}
			}
		).then((res) => { return res.json() });
		getAllData();
	}
	const deleteData = async (id) => {
		await fetch("https://65090cb8f6553137159ae712.mockapi.io/information/" + id, {
			method: "DELETE"
		});
		getAllData();
	}
	const updateData = async() =>{
		await fetch("https://65090cb8f6553137159ae712.mockapi.io/information/" + form.id, {
			method: "PUT",
			body: JSON.stringify(form),
			headers: {
				"Content-Type": "application/json"
			}
		});
		getAllData();
	}
	return (
		<div className='p-3'>
			<div className='mb-3'>
				<h1 className='text-2xl font-bold'>API CRUD</h1>
				<form className="space-y-4" onSubmit={addForm}>
					<div>
						<label>Name:</label>
						<input
							type="text"
							name="name"
							className="border rounded p-2"
							value={form.name}
							onChange={(e) => { setForm({ ...form, name: e.target.value }) }}
						/>
					</div>
					<div>
						<label>Favorite Color:</label>
						<input
							type="text"
							name="color"
							className="border rounded p-2"
							value={form.color}
							onChange={(e) => { setForm({ ...form, color: e.target.value }) }}
						/>
					</div>
					<div>
						<label>City:</label>
						<input
							type="text"
							name="city"
							className="border rounded p-2"
							value={form.city}
							onChange={(e) => { setForm({ ...form, city: e.target.value }) }}
						/>
					</div>
					<div>
						<label>Phone:</label>
						<input
							type="text"
							name="phone"
							className="border rounded p-2"
							value={form.phone}
							onChange={(e) => { setForm({ ...form, phone: e.target.value }) }}
						/>
					</div>
					{
						isFormUpdating ? <button className="bg-blue-500 text-white p-2 rounded" onClick={updateData}>update</button> : <button type="submit" className="bg-blue-500 text-white p-2 rounded">
							Submit
						</button>
					}
				</form>
			</div>
			<div>
				<table className='border border-black'>
					<thead>
						<tr>
							<td>id</td>
							<td>name</td>
							<td>color</td>
							<td>city</td>
							<td>phone</td>
							<td>actions</td>
						</tr>
					</thead>
					<tbody>

						{
							data.map((item) => {
								return <tr className='border border-black' key={item.id}>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.color}</td>
									<td>{item.city}</td>
									<td>{item.phone}</td>
									<td>
										<button className='p-2 rounded-md text-white bg-yellow-500'
											onClick={() => {
												setIsFormUpdating(true);
												setForm(item)
											}}
										>edit</button>
										<button className='p-2 ml-2 rounded-md text-white bg-red-600' onClick={() => {
											deleteData(item.id);
										}}>delete</button>
									</td>
								</tr>
							})
						}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default APICrud