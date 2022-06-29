import { useEffect, useState } from "react";
import axios from "axios";

import { Box, Typography, Grid } from "@mui/material";
import styles from "./styles/style";

import Coupon from "./components/coupons";
import Product from "./components/product";

const ClientLandingPage = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const getProducts = async () => {
			const req = await axios.get("http://localhost:8080/api/product");
			setProducts(req.data);
		};
		getProducts();
	}, []);
	return (
		<Box sx={{ ...styles.root }}>
			<Box sx={{ ...styles.center }}>
				<Box sx={{ ...styles.text }}>
					<Typography variant="h1">Marketplace</Typography>
					<Typography variant="desc" align="center">
						Here you can buy different products and help your community! Many of
						the products have coupons so be sure to check those out
					</Typography>
				</Box>
			</Box>
			<Typography variant="h2" sx={{ marginBottom: 4 }}>
				Coupons
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={3}>
					<Coupon />
				</Grid>
				<Grid item xs={3}>
					<Coupon />
				</Grid>
				<Grid item xs={3}>
					<Coupon />
				</Grid>
				<Grid item xs={3}>
					<Coupon />
				</Grid>
				<Grid item xs={3}>
					<Coupon />
				</Grid>
			</Grid>
			<Typography variant="h2" sx={{ marginBottom: 4, marginTop: 4 }}>
				Products
			</Typography>
			<Grid container spacing={3}>
				{Object.keys(products).map((key, index) => {
					return (
						<Grid item xs={6} md={3}>
							<Product product={products[key]} />
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default ClientLandingPage;
