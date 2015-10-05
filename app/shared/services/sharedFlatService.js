class SharedFlatService {
	
	getRoommates () {
		return {
			"Simon": {
				id: 12,
				phone: "06.00.00.00.00"
			},
			"Adrien": {
				id: 54,
				phone: "06.00.00.00.00"
			},
			"Julien": {
				id: 3,
				phone: "06.00.00.00.00"
			}
		}
	}

	static sharedFlatFactory(){
    	return new SharedFlatService();
  	}

}

export default SharedFlatService