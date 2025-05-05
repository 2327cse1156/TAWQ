const isAuththenticated = (req, res, next) => {
    try {
        const token =req.cookies.token || req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        
    } catch (error) {
        console.error("Authentication error:", error);
        res.status(500).json({ error: "Server Error: " + error.message });
        
    }
}
