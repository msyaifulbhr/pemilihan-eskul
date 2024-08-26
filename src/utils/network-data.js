const BASE_URL = 'https://data-api.santrinj.my.id';
// const BASE_URL = 'http://localhost:3003';

async function getSiswa() {
    try {
      const response = await fetch(`${BASE_URL}/siswa`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
}

async function getKriteria() {
    try {
      const response = await fetch(`${BASE_URL}/kriteria`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
}

async function addSiswa(siswaData) {
  const response = await fetch(`${BASE_URL}/siswa`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(siswaData),
  });
  const data = await response.json();
  return data;
}

async function updateSiswa(siswaId, siswaData) {
  const response = await fetch(`${BASE_URL}/siswa/${siswaId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(siswaData),
  });
  const data = await response.json();
  return data;
}

async function deleteSiswa(siswaId) {
  const response = await fetch(`${BASE_URL}/siswa/${siswaId}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
}

async function getKegiatan() {
  try {
    const response = await fetch(`${BASE_URL}/kegiatan`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}

export { getSiswa, addSiswa, updateSiswa, deleteSiswa, getKriteria, getKegiatan };