export default function useUsers() {

  const editUser = async (body: any) => {

    console.log("fetch", body)
    try {
      const response = await fetch(`/api/users/${body.email}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/jon'
        },
        body: JSON.stringify(body)
      });
      return await response.json();
    } catch (error) {
      console.log("error", error)
      throw error
    }
  }

  return {
    editUser,
  }
}