<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php,it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{	
		$this->load->view('login1');
	}
	public function show($data)
	{
		$this->load->view($data);
	}
	public function logout()
	{
		$this->load->database();
		$req = json_decode($this->input->raw_input_stream);	
		if(isset($req->result))
		{
			echo "delete";
			// $qr =$this->db->delete('log', array('fingerprint' =>$req->result));
			// $this->db->query($qr);
		}
	}
	public function login()
	{
		/*
		$startDate = date('m-d-Y H:i:s', time());
		$endDate = date('m-d-Y H:i:s', time() + (60 * 30));
		echo $startDate . "\n";
		echo $endDate;
		*/
		$this->load->database();
		$this->load->library('user_agent');
		$req = json_decode($this->input->raw_input_stream);	
		$arr = array();

		if(isset($req->result) && isset($req->user) && isset($req->pass))
		$user = $this->db->query("SELECT username FROM `user` WHERE `username` = '".$req->user."' && `pass` = '".md5($req->pass)."'")->result_array();
		if(count($user) > 0){
			$logArr =array(
				'user'=>$user[0]['username'],
				'agent'=>$this->agent->agent_string(),
				'endDate'=>date('Y-m-d H:i:s', time() + (60 * 60 * 30)),
				'fingerprint'=>$req->result,
				'ip'=>$this->input->ip_address()
			);
		$this->db->insert('log', $logArr);
		$arr['user'] = $user[0];	
		$arr['token']=$this->generateRandomString();
		$arr['url']= '/main';
		//$arr['log']=  $this->fingerprintcheck($req->result);
		$arr['success']=true;
	}
	else{
		$arr['success']=false;
	}
		
		
		echo json_encode($arr);
	}
	public function fingerprintcheck()
	{
		$req = json_decode($this->input->raw_input_stream);	

		$arr = array();
		$this->load->database();
		$log =  $this->db->query("SELECT * FROM `log` WHERE `fingerprint` = '".$req->id."' AND `endDate` >  '".date('Y-m-d H:i:s', time())."'")
		->result_array();
		if(count($log) != 0)
		{
			$arr['success']=true;
			$arr['url']='/main';
		}else
		{
			$arr['success']=false;
			$arr['url']='/login';
		}
		echo json_encode($arr);	
	}
	//
	public function generateRandomString($length = 64) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0
     ,$charactersLength - 1)];
    }
    return $randomString;
	}
}
