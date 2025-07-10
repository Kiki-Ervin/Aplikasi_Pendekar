-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 10 Jul 2025 pada 06.18
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pendekar`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'admin123', 'admin123'),
(3, 'admin1', '$2b$10$uBj1ShKj2jNEsxX8NjBJtOGoWQ7lVa47lS7P/NbAD4DRDRQ7JqG4u');

-- --------------------------------------------------------

--
-- Struktur dari tabel `beda_nama`
--

CREATE TABLE `beda_nama` (
  `id` int(11) NOT NULL,
  `nik` varchar(20) DEFAULT NULL,
  `no_kk` varchar(20) DEFAULT NULL,
  `nama_ktp` varchar(100) DEFAULT NULL,
  `jenis_kelamin` varchar(20) DEFAULT NULL,
  `tempat_lahir` varchar(50) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `agama` varchar(50) DEFAULT NULL,
  `pekerjaan` varchar(100) DEFAULT NULL,
  `nama_di_dokumen` varchar(100) DEFAULT NULL,
  `jenis_dokumen` varchar(100) DEFAULT NULL,
  `alamat` text DEFAULT NULL,
  `rt` varchar(10) DEFAULT NULL,
  `rw` varchar(10) DEFAULT NULL,
  `desa` varchar(50) DEFAULT NULL,
  `kecamatan` varchar(50) DEFAULT NULL,
  `kab_kota` varchar(50) DEFAULT NULL,
  `provinsi` varchar(50) DEFAULT NULL,
  `kewarganegaraan` varchar(50) DEFAULT NULL,
  `keperluan` text DEFAULT NULL,
  `tambahan_keterangan` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `beda_nama`
--

INSERT INTO `beda_nama` (`id`, `nik`, `no_kk`, `nama_ktp`, `jenis_kelamin`, `tempat_lahir`, `tanggal_lahir`, `agama`, `pekerjaan`, `nama_di_dokumen`, `jenis_dokumen`, `alamat`, `rt`, `rw`, `desa`, `kecamatan`, `kab_kota`, `provinsi`, `kewarganegaraan`, `keperluan`, `tambahan_keterangan`, `created_at`) VALUES
(2, '321', '123', 'firman', 'Laki-laki', 'Bandung', '2004-11-24', 'Islam', 'test', 'tes', 'te', 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', 'Bandung', 'Jawa Barat', 'Indonesia', 'tes', 'tes', '2025-07-04 09:52:16'),
(3, '1111', '1111', 'firman', 'Laki-laki', 'Bandung', '2004-11-24', 'Islam', 'test', 'tes', 'tes', 'Kp.Butul', '11', '03', 'Cipeujeuh', 'pacet', 'Bandung', 'Jawa Barat', 'Indonesia', 'tes', 'tes', '2025-07-04 10:44:11'),
(4, '321', '123', 'firman', 'Laki-laki', 'Bandung', '2004-11-24', 'Islam', 'test', 'ujang', 'tes', 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', 'Bandung', 'Jawa Barat', 'Indonesia', 'test', 'test', '2025-07-05 07:14:06'),
(5, '123', '321', 'firman', 'Laki-laki', 'Bandung', '2004-11-24', 'Islam', 'test', 'ujang', 'tes', 'Kp.Butul', '05', '06', 'Cipeujeuh', 'pacet', 'Bandung', 'Jawa Barat', 'Indonesia', 'hahaha', 'gagaga', '2025-07-06 18:16:52');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kelahiran`
--

CREATE TABLE `kelahiran` (
  `id` int(11) NOT NULL,
  `nik_anak` varchar(20) NOT NULL,
  `no_kk` varchar(20) NOT NULL,
  `nama_anak` varchar(100) NOT NULL,
  `jenis_kelamin` varchar(20) NOT NULL,
  `tempat_lahir` varchar(50) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `agama` varchar(50) DEFAULT NULL,
  `anak_ke` int(11) DEFAULT NULL,
  `alamat` text NOT NULL,
  `rt` varchar(5) DEFAULT NULL,
  `rw` varchar(5) DEFAULT NULL,
  `desa` varchar(50) DEFAULT NULL,
  `kecamatan` varchar(50) DEFAULT NULL,
  `kab_kota` varchar(50) DEFAULT NULL,
  `provinsi` varchar(50) DEFAULT NULL,
  `kewarganegaraan` varchar(50) DEFAULT NULL,
  `nama_ayah` varchar(100) DEFAULT NULL,
  `nama_ibu` varchar(100) DEFAULT NULL,
  `keperluan` text DEFAULT NULL,
  `keterangan` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `kelahiran`
--

INSERT INTO `kelahiran` (`id`, `nik_anak`, `no_kk`, `nama_anak`, `jenis_kelamin`, `tempat_lahir`, `tanggal_lahir`, `agama`, `anak_ke`, `alamat`, `rt`, `rw`, `desa`, `kecamatan`, `kab_kota`, `provinsi`, `kewarganegaraan`, `nama_ayah`, `nama_ibu`, `keperluan`, `keterangan`, `created_at`) VALUES
(1, '323', '123', 'usep', 'Laki-laki', 'Bandung', '0000-00-00', 'Islam', 6, 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', NULL, 'Jawa Barat', 'Indonesia', 'test', 'tes', 'test', 'test', '2025-07-04 09:18:34'),
(2, '323', '123', 'usep', 'Laki-laki', 'Bandung', '0000-00-00', 'Islam', 6, 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', NULL, 'Jawa Barat', 'Indonesia', 'test', 'tes', 'tessss', 'tessss', '2025-07-04 09:49:46'),
(3, '1111', '1111', 'usep', 'Laki-laki', 'Bandung', '2004-11-24', 'Islam', 6, 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', NULL, 'Jawa Barat', 'Indonesia', 'test', 'tes', 'tes', 'tes', '2025-07-04 10:42:40'),
(4, '323', '123', 'usep', 'Laki-laki', 'Bandung', '0000-00-00', 'Islam', 6, 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', NULL, 'Jawa Barat', 'Indonesia', 'test', 'tes', 'tes', 'tes', '2025-07-05 05:21:23'),
(5, '323', '123', 'usep', 'Laki-laki', 'Bandung', '0000-00-00', 'Islam', 6, 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', NULL, 'Jawa Barat', 'Indonesia', 'test', 'tes', 'test', 'tes', '2025-07-05 05:26:43'),
(6, '323', '123', 'usep', 'Laki-laki', 'Bandung', '0000-00-00', 'Islam', 6, 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', NULL, 'Jawa Barat', 'Indonesia', 'test', 'tes', 'test', 'tes', '2025-07-05 05:49:17'),
(7, '323', '123', 'usep', 'Laki-laki', 'Bandung', '2004-11-24', 'Islam', 6, 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', NULL, 'Jawa Barat', 'Indonesia', 'test', 'tes', 'test', 'test', '2025-07-05 05:53:44'),
(8, '323', '123', 'usep', 'Laki-laki', 'Bandung', '0000-00-00', 'Islam', 6, 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', NULL, 'Jawa Barat', 'Indonesia', 'test', 'tes', 'tes', 'tse', '2025-07-05 05:54:31'),
(9, '323', '123', 'usep', 'Laki-laki', 'Bandung', '0000-00-00', 'Islam', 6, 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', NULL, 'Jawa Barat', 'Indonesia', 'test', 'tes', 'tes', 'tse', '2025-07-05 05:56:10'),
(10, '323', '123', 'usep', 'Laki-laki', 'Bandung', '2004-11-24', 'Islam', 6, 'Kp.Butul', '05', '03', 'tes', 'pacet', NULL, 'Jawa Barat', 'Indonesia', 'test', 'tes', NULL, NULL, '2025-07-05 06:04:01'),
(11, '323', '123', 'usep', 'Laki-laki', 'Bandung', '2004-11-24', 'Islam', 6, 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', NULL, 'Jawa Barat', 'Indonesia', 'test', 'tes', 'test', 'tes', '2025-07-05 06:09:50'),
(12, '323', '1233333', 'usep', 'Laki-laki', 'Bandung', '0000-00-00', 'Islam', 6, 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', NULL, 'Jawa Barat', 'Indonesia', 'test', 'tes', 'tes', 'tes', '2025-07-05 06:12:47'),
(13, '323', '123', 'usep', 'Laki-laki', 'Bandung', '0000-00-00', 'Islam', 6, 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', NULL, 'Jawa Barat', 'Indonesia', 'test', 'tes', 'rtwa', 'twat', '2025-07-05 06:16:06'),
(14, '323', '123', 'usep', 'Laki-laki', 'Bandung', '2004-11-24', 'Islam', 6, 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', NULL, 'Jawa Barat', 'Indonesia', 'test', 'tes', 'test', NULL, '2025-07-05 06:30:44'),
(15, '323', '1233333', 'usep', 'Laki-laki', 'Bandung', '2004-11-24', 'Islam', 6, 'Kp.Butul', '05', '06', 'Cipeujeuh', 'pacet', NULL, 'Jawa Barat', 'Indonesia', 'test', 'tes', 'tes', NULL, '2025-07-05 06:35:18'),
(16, '323', '1233333', 'usep', 'Laki-laki', 'Bandung', '2004-11-24', 'Islam', 6, 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', NULL, 'Jawa Barat', 'Indonesia', 'test', 'tes', 'test', NULL, '2025-07-05 06:38:24'),
(17, '323', '123', 'usep', 'Laki-laki', 'Bandung', '0000-00-00', 'Islam', 6, 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', NULL, 'Jawa Barat', 'Indonesia', 'test', 'tes', 'test', 'test', '2025-07-05 06:44:32'),
(18, '323', '123', 'usep', 'Laki-laki', 'Bandung', '2004-11-24', 'Islam', 6, 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', NULL, 'Jawa Barat', 'Indonesia', 'test', 'tes', 'test', 'tes', '2025-07-05 06:46:14'),
(19, '323', '123', 'usep', 'Laki-laki', 'Bandung', '2004-11-24', 'Islam', 6, 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', NULL, 'Jawa Barat', 'Indonesia', 'test', 'tes', 'test', 'tes', '2025-07-07 01:06:28'),
(20, '32345', '123', 'usep', 'Laki-laki', 'Bandung', '2004-11-24', 'Islam', 6, 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', NULL, 'Jawa Barat', 'Indonesia', 'test', 'tes', 'test', 'test', '2025-07-08 06:18:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kematian`
--

CREATE TABLE `kematian` (
  `id` int(11) NOT NULL,
  `nik` varchar(50) DEFAULT NULL,
  `no_kk` varchar(50) DEFAULT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `jenis_kelamin` varchar(20) DEFAULT NULL,
  `tempat_lahir` varchar(100) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `tanggal_meninggal` date DEFAULT NULL,
  `sebab_kematian` varchar(255) DEFAULT NULL,
  `alamat_domisili` text DEFAULT NULL,
  `alamat` text DEFAULT NULL,
  `rt` varchar(10) DEFAULT NULL,
  `rw` varchar(10) DEFAULT NULL,
  `desa` varchar(100) DEFAULT NULL,
  `kecamatan` varchar(100) DEFAULT NULL,
  `kab_kota` varchar(100) DEFAULT NULL,
  `provinsi` varchar(100) DEFAULT NULL,
  `kewarganegaraan` varchar(50) DEFAULT NULL,
  `nama_pelapor` varchar(100) DEFAULT NULL,
  `hubungan_pelapor` varchar(50) DEFAULT NULL,
  `keperluan` text DEFAULT NULL,
  `tambahan_keterangan` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `kematian`
--

INSERT INTO `kematian` (`id`, `nik`, `no_kk`, `nama`, `jenis_kelamin`, `tempat_lahir`, `tanggal_lahir`, `tanggal_meninggal`, `sebab_kematian`, `alamat_domisili`, `alamat`, `rt`, `rw`, `desa`, `kecamatan`, `kab_kota`, `provinsi`, `kewarganegaraan`, `nama_pelapor`, `hubungan_pelapor`, `keperluan`, `tambahan_keterangan`, `created_at`) VALUES
(1, '321', '123', 'tes', 'tes', 'res', '0000-00-00', '0000-00-00', 'tes', NULL, 'tes', '6', '5', 'tes', 'tes', 'tes', 'tes', 'tes', 'res', 'rs', 'tes', 'ts', '2025-07-04 10:13:03'),
(2, '321333', '1233333', 'test', 'tes', 'res', '0000-00-00', '0000-00-00', 'tes', NULL, 'tes', '11', '06', 'tes', 'tes', 'tes', 'tes', 'tes', 'tes', 'tes', 'tes', 'tes', '2025-07-04 10:45:20'),
(3, '321', '123', 'test', 'tes', 'res', '0000-00-00', '0000-00-00', 'tes', NULL, 'tes', '11', '06', 'tes', 'tes', 'tes', 'tes', 'tes', 'test', 'tes', 'tes', 'tes', '2025-07-05 06:49:46'),
(4, '321', '123', 'test', 'Laki-laki', 'res', '0000-00-00', '0000-00-00', 'tes', NULL, 'tes', '05', '06', 'tes', 'tes', 'es', 'tes', 'tes', 'test', 'tes', 'test', 'test', '2025-07-05 07:17:08'),
(5, '3215454', '4354353', 'mr test', 'tes', 'tes', '0000-00-00', '0000-00-00', 'tes', NULL, 'tes', '09', '09', 'tes', 'tes', 'tes', 'tes', 'Indonesia', 'tes', 'tes', 'tes', 'tes', '2025-07-07 07:00:53');

-- --------------------------------------------------------

--
-- Struktur dari tabel `keramaian`
--

CREATE TABLE `keramaian` (
  `id` int(11) NOT NULL,
  `nik_penyelenggara` varchar(50) DEFAULT NULL,
  `no_kk` varchar(50) DEFAULT NULL,
  `nama_penyelenggara` varchar(100) DEFAULT NULL,
  `tempat_lahir` varchar(100) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `pekerjaan` varchar(100) DEFAULT NULL,
  `alamat_acara` text DEFAULT NULL,
  `tanggal_kegiatan` date DEFAULT NULL,
  `waktu_mulai` time DEFAULT NULL,
  `waktu_selesai` time DEFAULT NULL,
  `jenis_acara` varchar(100) DEFAULT NULL,
  `deskripsi_acara` text DEFAULT NULL,
  `keperluan` text DEFAULT NULL,
  `tambahan_keterangan` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `keramaian`
--

INSERT INTO `keramaian` (`id`, `nik_penyelenggara`, `no_kk`, `nama_penyelenggara`, `tempat_lahir`, `tanggal_lahir`, `pekerjaan`, `alamat_acara`, `tanggal_kegiatan`, `waktu_mulai`, `waktu_selesai`, `jenis_acara`, `deskripsi_acara`, `keperluan`, `tambahan_keterangan`, `created_at`) VALUES
(1, '321', '123', 'udin', 'Bandung', '2004-11-24', 'test', 'tes', '0000-00-00', '00:12:00', '00:00:00', 'tes', 'tes', 'tes', 'tes', '2025-07-04 10:19:31'),
(2, '1111', '1111', 'udin', 'Bandung', '2004-11-24', 'test', 'tes', '0000-00-00', '00:12:00', '00:00:00', 'tes', 'tes', 'tes', 'tes', '2025-07-04 10:46:04'),
(3, '1111', '1111', 'udin', 'Bandung', '2004-11-24', 'test', 'tes', '2019-11-23', '00:12:00', '00:13:00', 'tesss', 'tesss', 'tess', 'tessss', '2025-07-04 10:47:48'),
(4, '1111', '123', 'udin', 'Bandung', '2004-11-24', 'test', 'tes', '0000-00-00', '00:12:00', '00:00:00', 'tes', 'test', 'test', 'est', '2025-07-05 07:19:30');

-- --------------------------------------------------------

--
-- Struktur dari tabel `permohonan`
--

CREATE TABLE `permohonan` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `jenis_surat` varchar(50) DEFAULT NULL,
  `nama_pemohon` varchar(100) DEFAULT NULL,
  `tanggal_permohonan` datetime DEFAULT current_timestamp(),
  `status` enum('diproses','ditolak','selesai','dikirim') DEFAULT 'diproses',
  `data_lengkap` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`data_lengkap`)),
  `tanggal_dibuat` datetime DEFAULT current_timestamp(),
  `keterangan` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `permohonan`
--

INSERT INTO `permohonan` (`id`, `user_id`, `jenis_surat`, `nama_pemohon`, `tanggal_permohonan`, `status`, `data_lengkap`, `tanggal_dibuat`, `keterangan`) VALUES
(19, NULL, 'Surat Keterangan Beda Nama', 'firman', '2025-07-05 14:14:06', 'selesai', '{\"nik\":\"321\",\"no_kk\":\"123\",\"nama_ktp\":\"firman\",\"jenis_kelamin\":\"Laki-laki\",\"tempat_lahir\":\"Bandung\",\"tanggal_lahir\":\"20041124\",\"agama\":\"Islam\",\"pekerjaan\":\"test\",\"nama_di_dokumen\":\"ujang\",\"jenis_dokumen\":\"tes\",\"alamat\":\"Kp.Butul\",\"rt\":\"05\",\"rw\":\"03\",\"desa\":\"Cipeujeuh\",\"kecamatan\":\"pacet\",\"kab_kota\":\"Bandung\",\"provinsi\":\"Jawa Barat\",\"kewarganegaraan\":\"Indonesia\",\"keperluan\":\"test\",\"tambahan_keterangan\":\"test\"}', '2025-07-05 14:14:06', 'sudah dicetak'),
(21, NULL, 'Surat Izin Keramaian', 'udin', '2025-07-05 14:19:30', 'ditolak', '{\"nik_penyelenggara\":\"1111\",\"no_kk\":\"123\",\"nama_penyelenggara\":\"udin\",\"tempat_lahir\":\"Bandung\",\"tanggal_lahir\":\"20041124\",\"pekerjaan\":\"test\",\"alamat_acara\":\"tes\",\"tanggal_kegiatan\":\"11\",\"waktu_mulai\":\"1200\",\"waktu_selesai\":\"tes\",\"jenis_acara\":\"tes\",\"deskripsi_acara\":\"test\",\"keperluan\":\"test\",\"tambahan_keterangan\":\"est\"}', '2025-07-05 14:19:30', 'NIK Tidak Terdaftar'),
(22, NULL, 'Surat Keterangan Beda Nama', 'firman', '2025-07-07 01:16:52', 'dikirim', '{\"nik\":\"123\",\"no_kk\":\"321\",\"nama_ktp\":\"firman\",\"jenis_kelamin\":\"Laki-laki\",\"tempat_lahir\":\"Bandung\",\"tanggal_lahir\":\"20041124\",\"agama\":\"Islam\",\"pekerjaan\":\"test\",\"nama_di_dokumen\":\"ujang\",\"jenis_dokumen\":\"tes\",\"alamat\":\"Kp.Butul\",\"rt\":\"05\",\"rw\":\"06\",\"desa\":\"Cipeujeuh\",\"kecamatan\":\"pacet\",\"kab_kota\":\"Bandung\",\"provinsi\":\"Jawa Barat\",\"kewarganegaraan\":\"Indonesia\",\"keperluan\":\"hahaha\",\"tambahan_keterangan\":\"gagaga\"}', '2025-07-07 01:16:52', 'Pengajuan sudah dikirim'),
(25, NULL, 'Surat Keterangan Tidak Mampu', 'udin', '2025-07-07 13:36:01', 'selesai', '{\"nik\":\"0188\",\"no_kk\":\"678\",\"nama\":\"udin\",\"agama\":\"Islam\",\"jenis_kelamin\":\"Laki-laki\",\"tempat_lahir\":\"Bandung\",\"tanggal_lahir\":\"2025-07-09\",\"alamat\":\"Kp.Butul\",\"rt\":\"05\",\"rw\":\"06\",\"desa\":\"Cipeujeuh\",\"kecamatan\":\"pacet\",\"kabupaten\":\"Bandung\",\"provinsi\":\"Jawa Barat\",\"kewarganegaraan\":\"Indonesia\",\"pendidikan_terakhir\":\"test\",\"pendidikan_ditempuh\":\"test\",\"pekerjaan\":\"test\",\"keperluan\":\"tes\",\"tambahan_keterangan\":\"tes\"}', '2025-07-07 13:36:01', 'sudah dicetak');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tidak_mampu`
--

CREATE TABLE `tidak_mampu` (
  `id` int(11) NOT NULL,
  `nik` varchar(20) NOT NULL,
  `no_kk` varchar(20) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `agama` varchar(50) DEFAULT NULL,
  `jenis_kelamin` varchar(20) DEFAULT NULL,
  `tempat_lahir` varchar(100) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `rt` varchar(10) DEFAULT NULL,
  `rw` varchar(10) DEFAULT NULL,
  `desa` varchar(100) DEFAULT NULL,
  `kecamatan` varchar(100) DEFAULT NULL,
  `kabupaten` varchar(100) DEFAULT NULL,
  `provinsi` varchar(100) DEFAULT NULL,
  `kewarganegaraan` varchar(50) DEFAULT NULL,
  `pendidikan_terakhir` varchar(100) DEFAULT NULL,
  `pendidikan_ditempuh` varchar(100) DEFAULT NULL,
  `pekerjaan` varchar(100) DEFAULT NULL,
  `keperluan` text DEFAULT NULL,
  `tambahan_keterangan` text DEFAULT NULL,
  `status` enum('Dikirim','Diproses','Selesai','Ditolak') DEFAULT 'Dikirim',
  `tanggal_pengajuan` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tidak_mampu`
--

INSERT INTO `tidak_mampu` (`id`, `nik`, `no_kk`, `nama`, `agama`, `jenis_kelamin`, `tempat_lahir`, `tanggal_lahir`, `alamat`, `rt`, `rw`, `desa`, `kecamatan`, `kabupaten`, `provinsi`, `kewarganegaraan`, `pendidikan_terakhir`, `pendidikan_ditempuh`, `pekerjaan`, `keperluan`, `tambahan_keterangan`, `status`, `tanggal_pengajuan`) VALUES
(6, '321', '123', '', 'Islam', 'Laki-laki', 'Bandung', '0000-00-00', 'Kp.Butul', '', '03', '', 'pacet', 'Bandung', 'Jawa Barat', 'Indonesia', '', '', '', '', '', 'Dikirim', '2025-07-04 08:21:39'),
(7, '321', '123', 'Ujang', 'Islam', 'Laki-laki', 'Bandung', '2004-11-21', 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', 'Bandung', 'Jawa Barat', 'Indonesia', 'test', 'test', 'test', 'tes', 'teeeeee', 'Dikirim', '2025-07-04 09:48:33'),
(8, '11111', '11111', 'Ujang', 'Islam', 'Laki-laki', 'Bandung', '2002-02-24', 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', 'Bandung', 'Jawa Barat', 'Indonesia', 'test', 'test', 'test', 'tes', 'tes', 'Dikirim', '2025-07-04 10:41:47'),
(9, '321', '123', 'Ujang', 'Islam', 'Laki-laki', 'Bandung', '1234-11-22', 'Kp.Butul', '', '', '', '', 'Bandung', 'Jawa Barat', 'Indonesia', 'test', 'test', 'test', 'test', 'tes', 'Dikirim', '2025-07-05 04:09:18'),
(10, '321', '123', 'Ujang', NULL, 'Laki-laki', 'Bandung', '0204-09-24', 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', 'Bandung', 'Jawa Barat', NULL, NULL, NULL, NULL, 'tes', NULL, 'Dikirim', '2025-07-05 06:54:09'),
(11, '321', '123', 'Ujang', NULL, 'Laki-laki', 'Bandung', '0204-09-24', 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', 'Bandung', 'Jawa Barat', NULL, NULL, NULL, NULL, 'tes', NULL, 'Dikirim', '2025-07-05 06:54:23'),
(12, '321', '123', 'Ujang', NULL, 'Laki-laki', 'Bandung', '0124-02-24', 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', 'Bandung', 'Jawa Barat', NULL, NULL, NULL, NULL, 'test', NULL, 'Dikirim', '2025-07-05 06:55:43'),
(13, '321', '123', 'Ujang', NULL, 'Laki-laki', 'Bandung', '0124-02-24', 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', 'Bandung', 'Jawa Barat', NULL, NULL, NULL, NULL, 'test', NULL, 'Dikirim', '2025-07-05 06:57:54'),
(14, '321', '123', 'Ujang', NULL, 'Laki-laki', 'Bandung', '0124-02-24', 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', 'Bandung', 'Jawa Barat', NULL, NULL, NULL, NULL, 'test', NULL, 'Dikirim', '2025-07-05 06:58:18'),
(15, '1111', '123', 'Ujang', NULL, 'Laki-laki', 'Bandung', '0214-03-04', 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', 'Bandung', 'Jawa Barat', NULL, NULL, NULL, NULL, 'tes', NULL, 'Dikirim', '2025-07-05 06:58:58'),
(16, '321', '123', 'Ujang', NULL, 'Laki-laki', 'Bandung', NULL, 'Kp.Butul', '05', '06', 'Cipeujeuh', 'pacet', 'Bandung', 'Jawa Barat', NULL, NULL, NULL, NULL, 'test', NULL, 'Dikirim', '2025-07-05 07:01:51'),
(17, '0188', '678', 'udin', NULL, 'Laki-laki', 'Bandung', '2025-07-09', 'Kp.Butul', '05', '06', 'Cipeujeuh', 'pacet', 'Bandung', 'Jawa Barat', NULL, NULL, NULL, NULL, 'tes', NULL, 'Dikirim', '2025-07-07 06:36:01');

-- --------------------------------------------------------

--
-- Struktur dari tabel `usaha`
--

CREATE TABLE `usaha` (
  `id` int(11) NOT NULL,
  `nik` varchar(50) DEFAULT NULL,
  `no_kk` varchar(50) DEFAULT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `jenis_kelamin` varchar(20) DEFAULT NULL,
  `tempat_lahir` varchar(100) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `agama` varchar(50) DEFAULT NULL,
  `pekerjaan` varchar(100) DEFAULT NULL,
  `alamat` text DEFAULT NULL,
  `rt` varchar(10) DEFAULT NULL,
  `rw` varchar(10) DEFAULT NULL,
  `desa` varchar(100) DEFAULT NULL,
  `kecamatan` varchar(100) DEFAULT NULL,
  `kab_kota` varchar(100) DEFAULT NULL,
  `provinsi` varchar(100) DEFAULT NULL,
  `kewarganegaraan` varchar(50) DEFAULT NULL,
  `nama_usaha` varchar(100) DEFAULT NULL,
  `jenis_usaha` varchar(100) DEFAULT NULL,
  `alamat_usaha` text DEFAULT NULL,
  `tahun_berdiri` varchar(20) DEFAULT NULL,
  `status_tempat` varchar(50) DEFAULT NULL,
  `keperluan` text DEFAULT NULL,
  `tambahan_keterangan` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `usaha`
--

INSERT INTO `usaha` (`id`, `nik`, `no_kk`, `nama`, `jenis_kelamin`, `tempat_lahir`, `tanggal_lahir`, `agama`, `pekerjaan`, `alamat`, `rt`, `rw`, `desa`, `kecamatan`, `kab_kota`, `provinsi`, `kewarganegaraan`, `nama_usaha`, `jenis_usaha`, `alamat_usaha`, `tahun_berdiri`, `status_tempat`, `keperluan`, `tambahan_keterangan`) VALUES
(1, '333', '123', 'Ujang', 'Laki-laki', 'Bandung', '2025-07-09', 'Islam', 'test', 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', 'Bandung', 'Jawa Barat', 'Indonesia', 'test', 'test', 'Kp.Butul', 'test', 'test', 'test', 'test'),
(2, '321', '123', 'Ujang', 'Laki-laki', 'Bandung', '2004-11-24', 'Islam', 'test', 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', 'Bandung', 'Jawa Barat', 'Indonesia', 'test', 'test', 'Kp.Butul', 'test', 'test', 'tessss', 'tessss'),
(3, '1111', '1111', 'Ujang', 'Laki-laki', 'Bandung', '2004-11-24', 'Islam', 'test', 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', 'Bandung', 'Jawa Barat', 'Indonesia', 'test', 'test', 'Kp.Butul', 'test', 'test', 'tes', 'tes'),
(6, '123', '123', 'test2', 'Laki-laki', 'Bandung', '2004-11-24', NULL, NULL, 'Kp.Butul', '05', '03', 'Cipeujeuh', 'pacet', 'Bandung', 'Jawa Barat', NULL, 'test', 'test', 'Kp.Butul', NULL, NULL, 'test', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nik` varchar(20) DEFAULT NULL,
  `pin` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `nik`, `pin`) VALUES
(1, '3273024567890001', '1234'),
(2, '081394589050', '7575');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indeks untuk tabel `beda_nama`
--
ALTER TABLE `beda_nama`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `kelahiran`
--
ALTER TABLE `kelahiran`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `kematian`
--
ALTER TABLE `kematian`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `keramaian`
--
ALTER TABLE `keramaian`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `permohonan`
--
ALTER TABLE `permohonan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tidak_mampu`
--
ALTER TABLE `tidak_mampu`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `usaha`
--
ALTER TABLE `usaha`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nik` (`nik`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `beda_nama`
--
ALTER TABLE `beda_nama`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `kelahiran`
--
ALTER TABLE `kelahiran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `kematian`
--
ALTER TABLE `kematian`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `keramaian`
--
ALTER TABLE `keramaian`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `permohonan`
--
ALTER TABLE `permohonan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT untuk tabel `tidak_mampu`
--
ALTER TABLE `tidak_mampu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT untuk tabel `usaha`
--
ALTER TABLE `usaha`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
